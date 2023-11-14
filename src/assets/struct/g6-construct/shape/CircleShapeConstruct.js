import NodeConstruct from "@/assets/struct/g6-construct/build-in/NodeConstruct";
import Config from "@/assets/data/Config";

export default class CircleShapeConstruct extends NodeConstruct {
    //圆的半径
    r;
    /*
    * @param {number} r 圆的半径
    * */
    constructor(id, x, y, r) {
        super(id, x, y, undefined, Config.GroupShapeType.circle);
        this.r = r;
    }
}
