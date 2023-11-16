import G6Manager from "../function/G6Manager";
import NodeConstruct from "../g6-construct/build-in/NodeConstruct";
import Config, {AnchorType, GroupShapeType, NodeBuildInType} from "../../data/Config";
import GroupCfg from "../g6-construct/GroupCfg";
import AttrsConstruct from "../g6-construct/shape/AttrsConstruct";
import GraphCustom from "../tool/GraphCustom";
import {IGroup, INode} from "@antv/g6";
import AntVData from "../../data/AntVData";

export default class RectGroup {
    static addRectComb(x: number, y: number, size: number[]): void {
        let id = G6Manager.getRandomId('rect');
        let nodeStruct =
            new NodeConstruct(id, x, y, size, NodeBuildInType.rect);
        nodeStruct.label = '新增';
        let node = G6Manager.addNode(nodeStruct);
    }

    static addRectShape(node:INode){
        const model = node.getModel() as NodeConstruct;
        let size = model.size;
        let group = node.getContainer();//node.get('group')
        group.cfg.id = G6Manager.getRandomId('group');
        let anchorPoint = Config.AnchorPoints[Config.AnchorDirect.leftMiddle];
        let shapeType = GroupShapeType.circle;
        let anchorType:AnchorType = AnchorType.addEdge;
        this.addShape(group,anchorPoint,shapeType,size,anchorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.rightMiddle];
        this.addShape(group,anchorPoint,shapeType,size,anchorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.topMiddle];
        this.addShape(group,anchorPoint,shapeType,size,anchorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.bottomMiddle];
        this.addShape(group,anchorPoint,shapeType,size,anchorType);
        anchorType = AnchorType.scale;
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.leftTop];
        this.addShape(group,anchorPoint,shapeType,size,anchorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.rightTop];
        this.addShape(group,anchorPoint,shapeType,size,anchorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.leftBottom];
        this.addShape(group,anchorPoint,shapeType,size,anchorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.rightBottom];
        this.addShape(group,anchorPoint,shapeType,size,anchorType);
        model.addShape = true;
        GraphCustom.Instance.graph.paint();
    }

    static addShape(group: IGroup, anchorPoint: number[], shapeType: GroupShapeType, size: number[],
                    anchorType: AnchorType): void {
        let shapeId = G6Manager.getRandomId('shape');
        let groupCfg = new GroupCfg(shapeId);
        groupCfg.attrs =
            new AttrsConstruct(shapeId, size, anchorPoint,
                3, anchorType);
        group.addShape(shapeType, groupCfg);
    }
    static ShowShape(isShow:boolean):void{

    }
}
