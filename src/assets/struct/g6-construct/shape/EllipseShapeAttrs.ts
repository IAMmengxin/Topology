import  {AnchorType} from "../../../data/Config";
import BaseAttrs from "./BaseAttrs";

export default class EllipseShapeAttrs extends BaseAttrs {
    //水平半径
    rx:number;
    //垂直半径
    ry:number;

    /*
    * @param {number} rx 水平半径，type:number
    * @param {number} ry 垂直半径，type:number
    * */
    constructor(id:string,size:number[],anchor:number[],anchorType:AnchorType, rx:number, ry:number) {
        super(id,size,anchor, anchorType);
        this.rx = rx;
        this.ry = ry;
    }
}
