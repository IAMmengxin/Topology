import Config from "@/assets/data/Config";
import NodeConstruct from "@/assets/struct/g6-construct/build-in/NodeConstruct";

export default class EllipseShapeConstruct extends NodeConstruct {
    //水平半径
    rx;
    //垂直半径
    ry;

    /*
    * @param {number} rx 水平半径，type:number
    * @param {number} ry 垂直半径，type:number
    * */
    constructor(id, x, y, rx, ry) {
        super(id, x, y, null, Config.GroupShapeType.ellipse);
        this.rx = rx;
        this.ry = ry;
    }
}
