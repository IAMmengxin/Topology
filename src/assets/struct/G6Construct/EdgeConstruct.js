import { Arrow } from '@antv/g6';
export default class EdgeConstruct {
    //边id
    id;
    //边名称
    name;
    //起点
    source;
    //终点
    target;
    //边类型
    type;
    //文字
    label;
    //文字样式
    labelCfg;
    //起点锚点
    sourceAnchor;
    //终点锚点
    targetAnchor;
    //边样式
    style;
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
    constructor(id,name,source,target,label,labelCfg,sourceAnchor,
                targetAnchor,style = new Style(),type = 'polyline') {
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
class Style{
    //半径
    radius;
    //描边颜色
    stroke;
    //线宽
    lineWidth;
    //在鼠标移上去时增大选中宽度
    lineAppendWidth;
    //开始的箭头
    startArrow;
    //结尾的箭头
    endArrow;
    /*
    * @param {number} radius 半径,type:number
    * @param {string} stroke 描边颜色,type:string
    * @param {number} lineWidth 线宽,type:number
    * @param {number} lineAppendWidth 在鼠标移上去时增大选中宽度,type:number
    * @param {ArrowStruct} startArrow 开始的箭头,type:ArrowStruct
    * @param {ArrowStruct} endArrow 结尾的箭头,type:ArrowStruct
    * */
    constructor(radius = 0,stroke = 'black',lineWidth = 3,
                lineAppendWidth = 3,startArrow = null,
                endArrow = null) {
        this.radius = radius;
        this.stroke = stroke;
        this.lineWidth = lineWidth;
        this.lineAppendWidth = lineAppendWidth;
        this.startArrow = startArrow;
        this.endArrow = endArrow;
    }
}
class ArrowStruct{
    //箭头样式
    path;
    //箭头颜色
    fill;
    /*
    * @param {Arrow} path 箭头样式,type:Arrow
    * @param {string} fill 箭头颜色,type:string
    * */
    constructor(path = Arrow.vee,fill = 'black') {
        this.path = path;
        this.fill = fill;
    }
}
