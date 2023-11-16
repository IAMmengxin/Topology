import Config, {NodeBuildInType} from "../../../data/Config";
import BaseStyleConstruct from "../BaseStyleConstruct";
import LabelCfgConstruct from "../LabelCfgConstruct";
import BaseConstruct from "./BaseConstruct";

export default class NodeConstruct extends BaseConstruct{
    //节点id
    id: string;
    //节点名称
    name: string;
    //节点横坐标
    x: number;
    //纵坐标
    y: number;
    //文字内容
    label: string;
    //节点尺寸
    size: Array<number>;
    //节点锚点
    anchorPoints: Array<Array<number>>;
    //节点类型
    type: NodeBuildInType;
    //文字样式
    labelCfg: LabelCfgConstruct;
    //节点样式
    style: Style;
    //所属组件id
    comboId: string;
    addShape: boolean;


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
    constructor(id: string, x: number, y: number, size: Array<number>, type: NodeBuildInType, name: string = null,
                label: string = null, labelCfg: LabelCfgConstruct = new LabelCfgConstruct(),
                anchorPoints: number[][] = Config.AnchorPoints, style: Style = new Style(new BaseStyleConstruct()),
                comboId: string = null) {
        super(id, name, size, label,labelCfg);
        this.x = x;
        this.y = y;
        this.type = type;
        this.anchorPoints = anchorPoints;
        this.style = style;
        this.comboId = comboId;
        this.addShape = false;
    }
}

class Style extends BaseStyleConstruct {
    //线宽
    lineWidth: number;
    //半径
    radius: number;

    /*
    * @param {number} lineWidth 线宽,type:number
    * @param {number} radius 半径,type:number
    * @param {BaseStyleConstruct} baseStyle 半径,type:BaseStyleConstruct
    * */
    constructor(baseStyle: BaseStyleConstruct, lineWidth: number = 1, radius: number = 0) {
        super(baseStyle.stroke, baseStyle.fill, baseStyle.active, baseStyle.selected,
            baseStyle.highlight, baseStyle.inactive, baseStyle.disable);
        this.lineWidth = lineWidth;
        this.radius = radius;
    }
}
