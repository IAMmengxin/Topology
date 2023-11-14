import NodeConstruct from "@/assets/struct/g6-construct/build-in/NodeConstruct";
import Config from "@/assets/data/Config";
import BaseStyleConstruct from "@/assets/struct/g6-construct/BaseStyleConstruct";

export default class RectShapeConstruct {
    //矩形的宽度
    width;
    //矩形的高度
    height;
    //定义圆角,支持整数或数组形式， 分别对应左上、右上、右下、左下角的半径：
    // - radius 缩写为 1 或 [ 1 ] 相当于 [ 1, 1, 1, 1 ]
    // - radius 缩写为 [ 1, 2 ] 相当于 [ 1, 2, 1, 2 ]
    // - radius 缩写为 [ 1, 2, 3 ] 相当于 [ 1, 2, 3, 2 ]
    radius;
    style;
    constructor(id,x,y,width,height,radius) {
        this.style = new BaseStyleConstruct();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
    }
}
