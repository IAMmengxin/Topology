import {Arrow} from '@antv/g6';
import LabelCfgConstruct from "../LabelCfgConstruct";

export default class EdgeConstruct {
    //边id
    id: string;
    //边名称
    name: string;
    //起点
    source: string;
    //终点
    target: string;
    //边类型
    type: string;
    //文字
    label: string;
    //文字样式
    labelCfg: LabelCfgConstruct;
    //起点锚点
    sourceAnchor: number[][];
    //终点锚点
    targetAnchor: number[][];
    //边样式
    style: Style;

    /*
    * @param {string} id 边id,type:string
    * @param {string} name 边名称,type:string
    * @param {string} source 起点,type:string
    * @param {string} target 终点,type:string
    * @param {object} label 文字,type:string
    * @param {LabelCfgConstruct} labelCfg 文字样式,type:LabelCfgConstruct
    * @param {Array<Array<number>>} sourceAnchor 起点锚点,type:Array<Array<number>>
    * @param {Array<Array<number>>} targetAnchor 终点锚点,type:Array<Array<number>>
    * @param {Style} style 边样式,type:Style
    * @param {string} type 边类型,type:string
    * */
    constructor(id: string, name: string, source: string, target: string, label: string,
                labelCfg: LabelCfgConstruct, sourceAnchor: number[][],
                targetAnchor: number[][], style: Style = new Style(),
                type: string = 'polyline') {
        this.id = id;
        this.name = name;
        this.source = source;
        this.target = target;
        this.label = label;
        this.labelCfg = labelCfg;
        this.sourceAnchor = sourceAnchor;
        this.targetAnchor = targetAnchor;
        this.type = type;
        this.style = style;
    }
}

class Style {
    //半径
    radius: number;
    //描边颜色
    stroke: string;
    //线宽
    lineWidth: number;
    //如果线太细导致鼠标很难移上去，可选中增大这个值
    lineAppendWidth: number;
    //开始的箭头
    startArrow: ArrowStruct;
    //结尾的箭头
    endArrow: ArrowStruct;

    /*
    * @param {number} radius 半径,type:number
    * @param {string} stroke 描边颜色,type:string
    * @param {number} lineWidth 线宽,type:number
    * @param {number} lineAppendWidth 在鼠标移上去时增大选中宽度,type:number
    * @param {ArrowStruct} startArrow 开始的箭头,type:ArrowStruct
    * @param {ArrowStruct} endArrow 结尾的箭头,type:ArrowStruct
    * */
    constructor(radius: number = 0, stroke: string = 'black', lineWidth: number = 3,
                lineAppendWidth: number = 3, startArrow: ArrowStruct = null,
                endArrow: ArrowStruct = null) {
        this.radius = radius;
        this.stroke = stroke;
        this.lineWidth = lineWidth;
        this.lineAppendWidth = lineAppendWidth;
        this.startArrow = startArrow;
        this.endArrow = endArrow;
    }
}

class ArrowStruct {
    //箭头样式
    path;
    //箭头颜色
    fill;

    /*
    * @param {Arrow} path 箭头样式,type:Arrow
    * @param {string} fill 箭头颜色,type:string
    * */
    constructor(path = Arrow.vee, fill = 'black') {
        this.path = path;
        this.fill = fill;
    }
}
