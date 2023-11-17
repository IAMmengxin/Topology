import BaseAttrs from "./BaseAttrs";


export default class RectShapeAttrs extends BaseAttrs{
    //矩形的宽度
    width:number;
    //矩形的高度
    height:number;
    //定义圆角,支持整数或数组形式， 分别对应左上、右上、右下、左下角的半径：
    // - radius 缩写为 1 或 [ 1 ] 相当于 [ 1, 1, 1, 1 ]
    // - radius 缩写为 [ 1, 2 ] 相当于 [ 1, 2, 1, 2 ]
    // - radius 缩写为 [ 1, 2, 3 ] 相当于 [ 1, 2, 3, 2 ]
    radius:number[];
    constructor(id:string,size:number[],anchor:number[],anchorType,width:number,height:number,radius:number[]) {
        super(id,size,anchor,anchorType);
        this.width = width;
        this.height = height;
        this.radius = radius;
    }
}
