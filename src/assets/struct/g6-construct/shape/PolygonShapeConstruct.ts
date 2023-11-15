import Config, {GroupShapeType} from "../../../data/Config";
import NodeConstruct from "../build-in/NodeConstruct";
import LabelCfgConstruct from "../LabelCfgConstruct";
import BaseConstruct from "./BaseConstruct";


export default class PolygonShapeConstruct extends BaseConstruct{
    //多边形的所有端点坐标
    points:number[];
    x:number;
    y:number;
    type:GroupShapeType;
    //
    /*
    * @param {Array<Number>} points 多边形的所有端点坐标,type:{Array<Number>}
    * */
    constructor(id:string,  x:number, y:number,points:number[]) {
        super(id, id,  null, null,new LabelCfgConstruct());
        this.points = points;
        this.type = GroupShapeType.polygon;
    }
}
