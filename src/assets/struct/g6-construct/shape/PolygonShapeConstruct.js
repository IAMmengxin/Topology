import NodeConstruct from "@/assets/struct/g6-construct/build-in/NodeConstruct";
import Config from "@/assets/data/Config";

export default class PolygonShapeConstruct extends NodeConstruct{
    //多边形的所有端点坐标
    points;
    //
    /*
    * @param {Array<Number>} points 多边形的所有端点坐标,type:{Array<Number>}
    * */
    constructor(id,  x, y,points) {
        super(id,  x, y, null, Config.GroupShapeType.polygon);
        this.points = points;
    }
}
