import BaseStyleConstruct from "../BaseStyleConstruct";
import LabelCfgConstruct from "../LabelCfgConstruct";

export default class ComboConstruct {
    //组件id
    id: string;
    //父组件id
    parentId: string;
    //组件内边距
    padding: number;
    //该 Combo 的最小尺寸（非固定尺寸），默认 'circle' 类型 Combo 的 size 为 20，
    // 'rect' 类型的为 [20, 5]
    size: Array<number>;
    //固定该 Combo 的尺寸，不指定时 Combo 大小由内部元素的分布和大小来决定。若指定了 fixSize
    // 而没有指定 fixCollapseSize，则即使该 Combo 在收起状态下仍然保持 fixSize 指定的尺寸
    fixSize: Array<number>;
    //固定该 Combo 收起时的尺寸，不指定时，若未指定 fixSize 则由 size 决定收起时的尺寸，
    // 否则统一为 fixSize 尺寸
    fixCollapseSize: Array<number>;
    //文本
    label: string;
    //文本样式
    labelCfg: LabelCfgConstruct;
    //样式
    style: Style;

    constructor(id: string, label: string = null, labelCfg: LabelCfgConstruct = null, parentId: string = null,
                padding: number = 0, size: Array<number> = null, fixSize: Array<number> = null,
                fixCollapseSize: Array<number> = null, style: Style = new Style()) {
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

class Style extends BaseStyleConstruct {
    constructor() {
        super();
    }
}
