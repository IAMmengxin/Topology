import {Graph, registerBehavior, registerEdge, registerNode} from "@antv/g6";
import GraphCustom from "@/assets/struct/tool/GraphCustom";

let EdgeInstance = {};
let NodeInstance = {};
//全局水珠密度
let DENSITY = 20;

export class AnimationCustom {
    edgeName;
    middlePoint;
    shape;
    startPoint;

    constructor(groupName) {
        this.edgeName = groupName;
        this.middlePoint = [/*{circle:null,ratio:0},*/];
        this.shape = null;
        this.startPoint = null;
        this.start = false;
        //动画需要的水珠的数量
        this.pointCount = 0;
        //水珠密度
        this.density = -1;
    }

    static get Density() {
        return DENSITY;
    }

    static set Density(value) {
        DENSITY = value;
    }

    static EdgeAnim(edgeName) {
        if (!EdgeInstance[edgeName]) {
            EdgeInstance[edgeName] = new AnimationCustom(edgeName);
        }
        return EdgeInstance[edgeName];
    }

    addCircle(group) {
        group.addShape('circle', {
            attrs: {
                x: this.shape.getPoint(0.5).x,
                y: this.shape.getPoint(0.5).y,
                fill: '#ee5723',
                r: 3
            },
            name: 'addCircle'
        })
    }

    addPolyline() {
        let self = this;
        registerEdge(self.edgeName, {
                afterDraw(cfg, group) {
                    self.shape = group.get('children')[0];
                    // console.log("afterDraw")
                    self.addCircle(group);
                },
                // update(cfg,group){
                //
                // }
                update: undefined
            },
            'polyline')
        GraphCustom.Instance.graph.render();
    }

    addLineAnim() {
        let self = this;
        registerEdge(self.edgeName, {
                afterDraw(cfg, group) {
                    try {
                        self.shape = group.get('children')[0];
                    } catch (e) {
                        console.warn(e)
                    }
                    const length = self.shape.getTotalLength();
                    self.shape.animate((ratio) => {
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
        GraphCustom.Instance.graph.render();
    }

    //自定义线的拐点
    customInflectPoint(cfg, group) {
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
        registerEdge(self.edgeName,
            {
                // draw:(cfg,group)=>{
                // },
                afterDraw(cfg, group) {
                    //通过group.get('children')[0] 找到需要更新的图形
                    try {
                        self.shape = group.get("children")[0];
                    } catch (e) {
                        console.error(e)
                    }
                    if (!self.shape) {
                        console.warn("没有'" + self.edgeName + "'这条边!!!")
                        return;
                    }
                    self.startPoint = cfg.startPoint;
                    // console.log("self.middlePoint:", self.middlePoint)
                    //自动计算动画所需的水珠的数量
                    // if(self.pointCount===0){
                    self.pointCount = self.density===-1?
                        Math.floor(self.shape.getTotalLength() / DENSITY):
                        self.density===0?0:
                            Math.floor(self.shape.getTotalLength() / self.density);
                    // }
                    // if (self.middlePoint.length < 10) {
                    for (let i = 0; i < self.pointCount; i++) {
                        self.middlePoint.push({
                            circle: group.addShape("circle", {
                                attrs: {
                                    x: self.shape.getPoint(i / self.pointCount).x,
                                    y: self.shape.getPoint(i / self.pointCount).y,
                                    fill: 'red',
                                    r: 3
                                },
                                name: self.edgeName + "_circle_" + i
                            }),
                            ratio: i / self.pointCount
                        });
                    }
                    // }
                    // console.log("self.middlePoint:", self.middlePoint)
                    for (let i = 0; i < self.middlePoint.length; i++) {
                        let point = self.middlePoint[i];
                        //调用该图形的 animate 方法指定动画的参数及每一帧的变化（  第一个参数是返回每一帧需要变化的参数集的函数，其参数 ratio
                        // 是当前正在进行的一次动画的进度，范围 [0, 1]；第二个参数是动画的参数
                        point.circle.animate((ratio) => {
                            let pRatio = ratio / self.pointCount + point.ratio;
                            const tmpPoint = self.shape.getPoint(pRatio);
                            return {
                                x: tmpPoint.x,
                                y: tmpPoint.y,
                            }
                        }, {
                            repeat: true,
                            duration: 500,
                        })
                    }
                    self.middlePoint = [];
                },
                update: undefined
            },
            'polyline' // extend the built-in edge 'cubic'
        )
        GraphCustom.Instance.graph.render();
    }

    stopFlowAnim() {
        for (let point of this.middlePoint) {
            point.circle.stopAnimate();
        }
    }

    removeFlowAnim(graph) {
        //停止动画
        for (let point of this.middlePoint) {
            point.circle.stopAnimate();
            point.circle.destroy();
        }
        this.middlePoint = [];
        this.shape = null;
        graph.render();
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
