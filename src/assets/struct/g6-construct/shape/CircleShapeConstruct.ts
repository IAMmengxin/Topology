import NodeConstruct from "../build-in/NodeConstruct";
import Config from "../../../data/Config";

export default class CircleShapeConstruct extends NodeConstruct {
    //圆的半径
    r:number;
    /*
    * @param {number} r 圆的半径
    * */
    constructor(id:string, x:number, y:number, r:number) {
        super(id, x, y, undefined, Config.GroupShapeType.circle);
        this.r = r;
    }
}
