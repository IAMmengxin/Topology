
import BaseAttrs from "./BaseAttrs";


export default class PolygonShapeAttrs extends BaseAttrs{
    //多边形的所有端点坐标
    points:number[];
    /*
    * @param {Array<Number>} points 多边形的所有端点坐标,type:{Array<Number>}
    * */
    constructor(id:string,size:number[],anchor:number[],anchorType,points:number[]) {
        super(id, size,  anchor,anchorType);
        this.points = points;
    }
}
