import BaseStyleConstruct from "../BaseStyleConstruct";
import Config, {CursorType} from "../../../data/Config";

export default class BaseAttrs {
    //填充颜色,type:string
    fill: string;
    x: number;
    y: number;
    stroke: string;
    //设置描边的 alpha 或透明值，优先级高于 opacity，范围 [0, 1]。
    strokeOpacity:number;
    //鼠标在该节点上时的鼠标样式，CSS 的 cursor 选项都支持。
    cursor: CursorType;
    style: BaseStyleConstruct;
    anchorType: number;
    name: string;
    //描边宽度。
    lineWidth: number;
    //描边虚线，Number[] 类型中数组元素分别代表实、虚长度。
    lineDash:number|number[];
    //设置用于阴影的颜色。
    shadowColor:string;
    //设置用于阴影的模糊级别，数值越大，越模糊。
    shadowBlur:number;
    //设置阴影距形状的水平距离。
    shadowOffsetX:number;
    //设置阴影距形状的垂直距离
    shadowOffsetY:number;
    //设置绘图的当前 alpha 或透明值，范围 [0, 1]，对应 Canvas 属性 globalAlpha。
    opacity:number;
    //设置填充的 alpha 或透明值，优先级高于 opacity，范围 [0, 1]。
    fillOpacity:number;
    //如果线太细导致鼠标很难移上去，可选中增大这个值
    lineAppendWidth: number;
    /*
    * @param {Array<Number>} size 父节点的大小，type:Array<Number>
    * @param {Array<Number>} anchor 选择一个锚点，type:Array<Number>
    * */
    constructor(name:string,size: number[], anchor: number[],
                anchorType: number,cursor:CursorType = CursorType.default,
                lineWidth: number = 1) {
        this.x = anchor[0] * size[0] - size[0] / 2;
        this.y = anchor[1] * size[1] - size[1] / 2;
        this.stroke = Config.AnchorColor;
        this.fill = '#fff';
        this.style = null;
        this.anchorType = anchorType;
        this.name = name;
        this.lineWidth = lineWidth;
        this.lineDash = null;
        this.strokeOpacity = 1;
        this.cursor = cursor;
        this.shadowColor = null;
        this.shadowBlur = 0;
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.opacity = 1;
        this.fillOpacity = 1;
        this.lineAppendWidth = 3;
    }
}
