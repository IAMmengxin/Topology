import LabelCfgConstruct from "../LabelCfgConstruct";
import {GroupShapeType} from "../../../data/Config";
import Vector2 from "../../tool/Vector2";

export default class BaseConstruct{
    id:string;
    type:GroupShapeType;
    x:number;
    y:number;
    size:number[];
    constructor(id:string,size,x,y, type:GroupShapeType) {
        this.id = id;
        this.type = type;
    }
}
