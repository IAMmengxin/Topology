import {AnchorDirect, AnchorType} from "../../../data/Config";
import BaseAttrs from "./BaseAttrs";

export default class CircleShapeAttrs extends BaseAttrs {
    //圆的半径
    r:number;
    //锚点的位置
    anchorDirect:AnchorDirect;
    /*
    * @param {number} r 圆的半径
    * */
    constructor(name:string,size,anchor:number[], anchorType:AnchorType,r:number,anchorDirect:AnchorDirect) {
        super(name,size,anchor, anchorType);
        this.r = r;
        this.anchorDirect = anchorDirect;
    }
}
