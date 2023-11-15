import {IGroup, ModelConfig, registerEdge, registerNode} from "@antv/g6";
import GraphCustom from "../tool/GraphCustom";
import Vector2 from "../tool/Vector2";

let EdgeInstance = {};
let NodeInstance = {};
//全局水珠密度
let DENSITY = 20;

export class AnimationCustom {
    get edgeName() {
        return this._edgeName;
    }

    set edgeName(value) {
        this._edgeName = value;
    }
    get shape() {
        return this._shape;
    }

    set shape(value) {
        this._shape = value;
    }
    get middlePoint() {
        return this._middlePoint;
    }

    set middlePoint(value) {
        this._middlePoint = value;
    }
    get startPoint() {
        return this._startPoint;
    }

    set startPoint(value) {
        this._startPoint = value;
    }
    get start(): boolean {
        return this._start;
    }

    set start(value: boolean) {
        this._start = value;
    }
    get pointCount(): number {
        return this._pointCount;
    }

    set pointCount(value: number) {
        this._pointCount = value;
    }
    get density(): number {
        return this._density;
    }

    set density(value: number) {
        this._density = value;
    }
    private _edgeName:string;
    private _middlePoint:Array<any>;
    private _shape:any;
    private _startPoint:Vector2;
    private _start: boolean;
    private _pointCount: number;
    private _density: number;

    constructor(groupName:string) {
        this._edgeName = groupName;
        this._middlePoint = [/*{circle:null,ratio:0},*/];
        this._shape = null;
        this._startPoint = null;
        this._start = false;
        //动画需要的水珠的数量
        this._pointCount = 0;
        //水珠密度
        this._density = -1;
    }

    static get Density() {
        return DENSITY;
    }

    static set Density(value) {
        DENSITY = value;
    }

    static EdgeAnim(edgeName:string) {
        if (!EdgeInstance[edgeName]) {
            EdgeInstance[edgeName] = new AnimationCustom(edgeName);
        }
        return EdgeInstance[edgeName];
    }

    addCircle(group) {
        group.addShape('circle', {
            attrs: {
                x: this._shape.getPoint(0.5).x,
                y: this._shape.getPoint(0.5).y,
                fill: '#ee5723',
                r: 3
            },
            name: 'addCircle'
        })
    }

    addPolyline() {
        let self = this;
        registerEdge(self._edgeName, {
                afterDraw(cfg, group) {
                    self._shape = group.get('children')[0];
                    // console.log("afterDraw")
                    self.addCircle(group);
                },
                // update(cfg,group){
                //
                // }
                update: undefined
            },
            'polyline')
        GraphCustom.Instance.graph.paint();
    }

    addLineAnim() {
        let self = this;
        registerEdge(self._edgeName, {
                afterDraw(cfg, group) {
                    try {
                        self._shape = group.get('children')[0];
                    } catch (e) {
                        console.warn(e)
                    }
                    const length = self._shape.getTotalLength();
                    self._shape.animate((ratio) => {
                        const startLen = ratio * length;
                        return {
                            lineDash: [startLen, length - startLen]
                        };
                    }, {
                        repeat: true,
                        duration: 2000
                    })
                },
                update: undefined,
            },
            'polyline')
        GraphCustom.Instance.graph.paint();
    }

    //自定义线的拐点
    customInflectPoint(cfg:ModelConfig, group:IGroup) {
        const startPoint = cfg.startPoint;
        const endPoint = cfg.endPoint;
        return group.addShape('path', {
            attrs: {
                path: [
                    //起点
                    ['M', startPoint.x, startPoint.y],
                    //拐点
                    ['L', (endPoint.x - startPoint.x) / 3 * 2 + startPoint.x, startPoint.y],
                    ['L', (endPoint.x - startPoint.x) / 3 * 2 + startPoint.x, endPoint.y],
                    ['L', endPoint.x, endPoint.y]
                ],
                lineWidth: 2,
                stroke: 'black'
            },
            name: 'ss'
        });
    }

    addFlowAnim() {
        let self = this;
        registerEdge(self._edgeName,
            {
                // draw:(cfg,group)=>{
                // },
                afterDraw(cfg, group) {
                    //通过group.get('children')[0] 找到需要更新的图形
                    try {
                        self._shape = group.get("children")[0];
                    } catch (e) {
                        console.error(e)
                    }
                    if (!self._shape) {
                        console.warn("没有'" + self._edgeName + "'这条边!!!")
                        return;
                    }
                    self._startPoint = cfg.startPoint as Vector2;
                    // console.log("self.middlePoint:", self.middlePoint)
                    //自动计算动画所需的水珠的数量
                    // if(self.pointCount===0){
                    self._pointCount = self._density===-1?
                        Math.floor(self._shape.getTotalLength() / DENSITY):
                        self._density===0?0:
                            Math.floor(self._shape.getTotalLength() / self._density);
                    // }
                    // if (self.middlePoint.length < 10) {
                    for (let i = 0; i < self._pointCount; i++) {
                        self._middlePoint.push({
                            circle: group.addShape("circle", {
                                attrs: {
                                    x: self._shape.getPoint(i / self._pointCount).x,
                                    y: self._shape.getPoint(i / self._pointCount).y,
                                    fill: 'red',
                                    r: 3
                                },
                                name: self._edgeName + "_circle_" + i
                            }),
                            ratio: i / self._pointCount
                        });
                    }
                    // }
                    // console.log("self.middlePoint:", self.middlePoint)
                    for (let i = 0; i < self._middlePoint.length; i++) {
                        let point = self._middlePoint[i];
                        //调用该图形的 animate 方法指定动画的参数及每一帧的变化（  第一个参数是返回每一帧需要变化的参数集的函数，其参数 ratio
                        // 是当前正在进行的一次动画的进度，范围 [0, 1]；第二个参数是动画的参数
                        point.circle.animate((ratio) => {
                            let pRatio = ratio / self._pointCount + point.ratio;
                            const tmpPoint = self._shape.getPoint(pRatio);
                            return {
                                x: tmpPoint.x,
                                y: tmpPoint.y,
                            }
                        }, {
                            repeat: true,
                            duration: 500,
                        })
                    }
                    self._middlePoint = [];
                },
                update: undefined
            },
            'polyline' // extend the built-in edge 'cubic'
        )
        GraphCustom.Instance.graph.paint();
    }

    stopFlowAnim() {
        for (let point of this._middlePoint) {
            point.circle.stopAnimate();
        }
    }

    removeFlowAnim(graph) {
        //停止动画
        for (let point of this._middlePoint) {
            point.circle.stopAnimate();
            point.circle.destroy();
        }
        this._middlePoint = [];
        this._shape = null;
        graph.paint();
    }

    static NodeAnim(nodeName) {
        if (NodeInstance[nodeName] == null) {
            NodeInstance[nodeName] = new AnimationCustom(nodeName);
        }
        return NodeInstance[nodeName];
    }

    addNodeAnchor() {
        registerNode(
            'diamond',
            {
                //... // 其他方法
                getAnchorPoints() {
                    return [
                        [0, 0.5],// 左侧中间
                        [0.5, 0],//上侧中间
                        [1, 0.5],// 右侧中间
                        [0.5, 1]//下侧中间
                    ];
                },
            },
            'rect',
        );
    }
}
