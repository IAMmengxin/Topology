import NodeConstruct from "../build-in/NodeConstruct";
import Config from "../../../data/Config";


export default class ImageShapeConstruct extends NodeConstruct{
    //图片宽度
    width:number;
    //图片高度
    height:number;
    //图片源,G6 支持多种格式的图片：url、ImageData、Image、canvas
    img:string;
    /*
    * @param {string} img 图片源,G6 支持多种格式的图片：url、ImageData、Image、canvas,type:string
    * */
    constructor(id:string,x:number, y:number,width:number,height:number,img:string) {
        super(id,x, y, null, Config.GroupShapeType.polygon);
        this.width = width;
        this.height = height;
        this.img = img;
    }
}
