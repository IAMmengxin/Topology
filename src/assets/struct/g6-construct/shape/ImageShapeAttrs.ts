
import BaseAttrs from "./BaseAttrs";


export default class ImageShapeAttrs extends BaseAttrs{
    //图片宽度
    width:number;
    //图片高度
    height:number;
    //图片源,G6 支持多种格式的图片：url、ImageData、Image、canvas
    img:string;
    /*
    * @param {string} img 图片源,G6 支持多种格式的图片：url、ImageData、Image、canvas,type:string
    * */
    constructor(id:string,size:number[],anchor:number[],anchorType,width:number,height:number,img:string) {
        super(id,size,anchor,anchorType);
        this.width = width;
        this.height = height;
        this.img = img;
    }
}
