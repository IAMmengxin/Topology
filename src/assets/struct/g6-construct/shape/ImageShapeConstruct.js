import NodeConstruct from "@/assets/struct/g6-construct/build-in/NodeConstruct";
import Config from "@/assets/data/Config";

export default class ImageShapeConstruct extends NodeConstruct{
    //图片宽度
    width;
    //图片高度
    height;
    //图片源,G6 支持多种格式的图片：url、ImageData、Image、canvas
    img;
    /*
    * @param {string} img 图片源,G6 支持多种格式的图片：url、ImageData、Image、canvas,type:string
    * */
    constructor(id,x, y,width,height,img) {
        super(id,x, y, null, Config.GroupShapeType.polygon);
        this.width = width;
        this.height = height;
        this.img = img;
    }
}
