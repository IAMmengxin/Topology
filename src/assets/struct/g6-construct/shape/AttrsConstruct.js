import BaseStyleConstruct from "@/assets/struct/g6-construct/BaseStyleConstruct";
import Config from "@/assets/data/Config";
import LabelCfgConstruct from "@/assets/struct/g6-construct/LabelCfgConstruct";

export default class AttrsConstruct {
    constructor(id,x,y,r,stroke,type) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.stroke = stroke;
        this.id = id;
        this.style = new BaseStyleConstruct();
        this.anchorPoints =  Config.AnchorPoints;
        this.label = null;
        this.type = type;
        this.name = id;
        this.labelCfg = new LabelCfgConstruct();
        this.comboId = 'comboId';
    }
}
