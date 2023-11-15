import BaseStyleConstruct from "./BaseStyleConstruct";


export default class LabelCfgConstruct {
    //文字样式
    style:Style;
    //文本相对于节点的位置，modelRect无效
    position:LabelCfgPosition;
    //文本的偏移，position 为 'bottom' 时，文本的上方偏移量；position 为 'left' 时，文本的右方偏移量；以此类推在其他 position 时的情况。modelRect 节点的 offset 为左边距
    offset:number;

    /*
    * @param {Config.LabelPosition} position 文本相对于节点的位置,type:Config.LabelPosition
    * @param {number} offset 文本的偏移，position 为 'bottom' 时，文本的上方偏移量；position 为 'left' 时，文本的右方偏移量；以此类推在其他 position 时的情况。modelRect 节点的 offset 为左边距
    * @param {Style} style 文字样式,type:Style
    * */
    constructor(position:LabelCfgPosition = LabelCfgPosition.center, offset = null, style = new Style()) {
        this.position = position;
        this.offset = offset;
        this.style = style;
    }
}
enum LabelCfgPosition{
    left='left',right='right',top='top',bottom='bottom',center='center'
}

class Style extends BaseStyleConstruct {
    //文字大小
    fontSize:number;
    //文字粗细
    fontWeight:number;
    /*
    * @param {number} fontSize 文字大小,type:number
    * @param {number} fontWeight 文字粗细,type:number
    * @param {BaseStyleConstruct} baseStyle 文字样式,type:BaseStyleConstruct
    * */
    constructor(fontSize = 12, fontWeight = 400, baseStyle = new BaseStyleConstruct()) {
        super(baseStyle.fill, baseStyle.stroke, baseStyle.active, baseStyle.selected,
            baseStyle.highlight, baseStyle.inactive, baseStyle.disable, baseStyle.shadowColor,
            baseStyle.shadowBlur);
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
    }
}
