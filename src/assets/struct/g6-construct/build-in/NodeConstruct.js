import BaseStyleConstruct from "@/assets/struct/g6-construct/BaseStyleConstruct";
import Config from "@/assets/data/Config";
import LabelCfgConstruct from "@/assets/struct/g6-construct/LabelCfgConstruct";

export default class NodeConstruct {
    //节点id
    id;
    //节点名称
    name;
    //节点横坐标
    x;
    //纵坐标
    y;
    //文字内容
    label;
    //节点尺寸
    size;
    //节点锚点
    anchorPoints;
    //节点类型
    type;
    //文字样式
    labelCfg;
    //节点样式
    style;
    //所属组件id
    comboId;


    /*
    * @param {string} id 节点id,type:string
    * @param {string} name 节点名称,type:string
    * @param {number} x 节点横坐标,type:number
    * @param {number} y 节点纵坐标,type:number
    * @param {Array<Number>} size 节点尺寸,type:Array<Number>
    * @param {string} label 文字内容,type:string
    * @param {LabelCfgConstruct} labelCfg 文字样式,type:LabelCfgConstruct
    * @param {Array<Array<Number>>} anchorPoints 节点锚点,type:Array<Array<Number>>
    * @param {Style} style 节点样式,type:Style
    * @param {string} comboId 所属组件id,type:string
    * */
    constructor(id, x, y, size, type, name = null, label = null, labelCfg = new LabelCfgConstruct(),
                anchorPoints = Config.AnchorPoints, style = new Style(new BaseStyleConstruct()),
                comboId = null) {
        this.id = id;
        this.name = name === null ? id : name;
        this.x = x;
        this.y = y;
        this.label = label;
        this.size = size;
        this.type = type;
        this.anchorPoints = anchorPoints;
        this.labelCfg = labelCfg;
        this.style = style;
        this.comboId = comboId;
    }
}

class Style extends BaseStyleConstruct {
    //线宽
    lineWidth;
    //半径
    radius;

    /*
    * @param {number} lineWidth 线宽,type:number
    * @param {number} radius 半径,type:number
    * @param {BaseStyleConstruct} baseStyle 半径,type:BaseStyleConstruct
    * */
    constructor(baseStyle, lineWidth = 1, radius = 0) {
        super(baseStyle.stroke, baseStyle.fill, baseStyle.active, baseStyle.selected,
            baseStyle.highlight, baseStyle.inactive, baseStyle.disable);
        this.lineWidth = lineWidth;
        this.radius = radius;
    }
}
