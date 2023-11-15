import NodeConstruct from "../build-in/NodeConstruct";
import Config from "../../../data/Config";

export default class EllipseShapeConstruct extends NodeConstruct {
    //水平半径
    rx:number;
    //垂直半径
    ry:number;

    /*
    * @param {number} rx 水平半径，type:number
    * @param {number} ry 垂直半径，type:number
    * */
    constructor(id:string, x:number, y:number, rx:number, ry:number) {
        super(id, x, y, null, Config.GroupShapeType.ellipse);
        this.rx = rx;
        this.ry = ry;
    }
}
