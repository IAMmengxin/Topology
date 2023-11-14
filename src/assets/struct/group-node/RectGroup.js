import G6Manager from "@/assets/struct/function/G6Manager";
import NodeConstruct from "@/assets/struct/g6-construct/build-in/NodeConstruct";
import Config from "@/assets/data/Config";
import GroupCfg from "@/assets/struct/g6-construct/GroupCfg";
import AttrsConstruct from "@/assets/struct/g6-construct/shape/AttrsConstruct";
import GraphCustom from "@/assets/struct/tool/GraphCustom";

export default class RectGroup {
    static addRectComb(x, y, size) {
        let id = G6Manager.getRandomId('rect');
        let nodeStruct =
            new NodeConstruct(id, x, y, size, Config.NodeBuildInType.rect);
        let node = G6Manager.addNode(nodeStruct);
        let group = node.getContainer();//node.get('group')
        let shapeId = G6Manager.getRandomId('shape');
        let groupCfg = new GroupCfg(shapeId);
        let relativeP = Config.AnchorPoints[Config.AnchorDirect.rightTop];
        let shapeType = Config.GroupShapeType.circle;
        groupCfg.attrs = new AttrsConstruct(shapeId, relativeP[0]*size[0]-size[0]/2,
            relativeP[1]*size[1]-size[1]/2, 3, 'black', shapeType);
        group.addShape(shapeType, groupCfg);
        GraphCustom.Instance.render();
    }
}
