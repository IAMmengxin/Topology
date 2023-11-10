import BaseStyle from "@/assets/struct/G6Construct/BaseStyle";

export default class LabelCfg{
    style;
    position;
    offset;
    constructor(position = null,offset = null,style = new Style()) {
        this.position = position;
        this.offset = offset;
        this.style = style;
    }
}
class Style extends BaseStyle{
    fontSize;
    fontWeight;
    constructor(fontSize = 12,fontWeight = 400,baseStyle) {
        super(baseStyle.fill,baseStyle.stroke,baseStyle.active,baseStyle.selected,
            baseStyle.highlight,baseStyle.inactive,baseStyle.disable,baseStyle.shadowColor,
        baseStyle.shadowBlur);
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
    }
}
