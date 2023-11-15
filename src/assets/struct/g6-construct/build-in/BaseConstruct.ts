import LabelCfgConstruct from "../LabelCfgConstruct";

export default class BaseConstruct{
    id:string;
    name:string;
    size:Array<number>;
    label:string;
    labelCfg:LabelCfgConstruct;
    constructor(id:string,name:string,size:Array<number>,label:string,
                labelCfg:LabelCfgConstruct) {
        this.id = id;
        this.name = name === null ? id : name;
        this.size = size;
        this.label = label;
        this.labelCfg = labelCfg;
    }
}
