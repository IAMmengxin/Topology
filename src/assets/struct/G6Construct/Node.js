import BaseStyle from "@/assets/struct/G6Construct/BaseStyle";
import Config from "@/assets/Data/Config";
import LabelCfg from "@/assets/struct/G6Construct/LabelCfg";

export default class Node{
    id;
    x;
    y;
    label;
    size;
    anchorPoints;
    type;
    labelCfg;
    style;
    constructor(id,x,y,label,size,type,anchorPoints = Config.anchorPoints,
                labelCfg = new LabelCfg(),style = new Style()) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.label = label;
        this.size = size;
        this.type = type;
        this.anchorPoints = anchorPoints;
        this.labelCfg = labelCfg;
        this.style = style;
    }
}
class Style extends BaseStyle{
    lineWidth;
    constructor(lineWidth = 1,radius = 0,baseStyle) {
        super(baseStyle.fill,baseStyle.stroke,baseStyle.active,baseStyle.selected,
            baseStyle.highlight,baseStyle.inactive,baseStyle.disable);
        this.lineWidth = lineWidth;
        this.radius = radius;
    }
}
