import BaseStyleConstruct from "@/assets/struct/g6-construct/BaseStyleConstruct";
import LabelCfgConstruct from "@/assets/struct/g6-construct/LabelCfgConstruct";

export default class ComboConstruct {
    //组件id
    id;
    //父组件id
    parentId;
    //组件内边距
    padding;
    //该 Combo 的最小尺寸（非固定尺寸），默认 'circle' 类型 Combo 的 size 为 20，
    // 'rect' 类型的为 [20, 5]
    size;
    //固定该 Combo 的尺寸，不指定时 Combo 大小由内部元素的分布和大小来决定。若指定了 fixSize
    // 而没有指定 fixCollapseSize，则即使该 Combo 在收起状态下仍然保持 fixSize 指定的尺寸
    fixSize;
    //固定该 Combo 收起时的尺寸，不指定时，若未指定 fixSize 则由 size 决定收起时的尺寸，
    // 否则统一为 fixSize 尺寸
    fixCollapseSize;
    //文本
    label;
    //文本样式
    labelCfg;
    //样式
    style;
    constructor(id,label = null,labelCfg = null,parentId = null,padding = 0,
                size = null,fixSize = null, fixCollapseSize = null,style = new Style()) {
        this.id = id;
        this.label = label;
        this.labelCfg = labelCfg;
        this.parentId = parentId;
        this.padding = padding;
        this.size = size;
        this.fixSize = fixSize;
        this.fixCollapseSize = fixCollapseSize;
        this.style = style;
    }
}
class Style extends BaseStyleConstruct{
    constructor() {
        super();
    }
}
