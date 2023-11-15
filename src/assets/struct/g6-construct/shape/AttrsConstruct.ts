import BaseStyleConstruct from "../BaseStyleConstruct";
import Config from "../../../data/Config";
import LabelCfgConstruct from "../LabelCfgConstruct";

export default class AttrsConstruct {
    //填充颜色,type:string
    fill: string;
    /*
    * @param {Array<Number>} size 父节点的大小，type:Array<Number>
    * @param {Array<Number>} anchor 选择一个锚点，type:Array<Number>
    * */
    x: number;
    y: number;
    r: number;
    stroke: string;
    id: string;
    style: BaseStyleConstruct;
    anchorPoints: number[][];
    label: string;
    anchorType: number;
    name: string;
    labelCfg: LabelCfgConstruct;

    constructor(id: string, size: number[], anchor: number[], r: number,
                anchorType: number, stroke: string = Config.AnchorColor) {
        this.x = anchor[0] * size[0] - size[0] / 2;
        this.y = anchor[1] * size[1] - size[1] / 2;
        this.r = r;
        this.stroke = stroke;
        this.fill = '#fff';
        this.id = id;
        this.style = null;
        this.anchorPoints = Config.AnchorPoints;
        this.label = null;
        this.anchorType = anchorType;
        this.name = id;
        this.labelCfg = null;
    }
}
