import G6Manager from "../function/G6Manager";
import NodeConstruct from "../g6-construct/build-in/NodeConstruct";
import Config, {AnchorType, CursorType, GroupShapeType, NodeBuildInType} from "../../data/Config";
import GroupCfg from "../g6-construct/GroupCfg";
import GraphCustom from "../tool/GraphCustom";
import {IGroup, INode} from "@antv/g6";
import CircleShapeAttrs from "../g6-construct/shape/CircleShapeAttrs";
import {ShapeCfg} from "@antv/g-base/src/types";

export default class RectGroup {
    static addRectComb(x: number, y: number, size: number[]): void {
        let id = G6Manager.getRandomId('rect');
        let nodeStruct =
            new NodeConstruct(id, x, y, size, NodeBuildInType.rect);
        nodeStruct.label = '新增';
        nodeStruct.style.cursor = CursorType.move;
        nodeStruct.labelCfg.style.cursor = CursorType.move;
        const node = G6Manager.addNode(nodeStruct);
    }

    static addRectShape(node:INode){
        const model = <unknown>node.getModel() as NodeConstruct;
        const nodeId = model.id;
        let size = model.size;
        let group = node.getContainer();//node.get('group')
        // group.cfg.id = G6Manager.getRandomId('group');
        let anchorPoint = Config.AnchorPoints[Config.AnchorDirect.leftMiddle];
        let shapeType = GroupShapeType.circle;
        let anchorType:AnchorType = AnchorType.connector;
        let cursorType = CursorType.crosshair;
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.rightMiddle];
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.topMiddle];
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.bottomMiddle];
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType);

        anchorType = AnchorType.scale;
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.leftTop];
        cursorType = CursorType.seResize;
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.rightBottom];
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType);

        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.rightTop];
        cursorType = CursorType.neResize;
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType);
        anchorPoint = Config.AnchorPoints[Config.AnchorDirect.leftBottom];
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType);

        model.addShape = true;
        GraphCustom.Instance.graph.paint();
    }

    static addCircleShape(group: IGroup, anchorPoint: number[], shapeType: GroupShapeType, size: number[],
                    anchorType: AnchorType,nodeId,cursorType:CursorType): void {
        const shapeName = nodeId;
        const groupCfg = new GroupCfg(shapeName);
        groupCfg.attrs =
            new CircleShapeAttrs(shapeName, size, anchorPoint,
                anchorType,3);
        groupCfg.attrs.cursor = cursorType;
        group.addShape(shapeType, <ShapeCfg>groupCfg);
    }
    static ShowShape(isShow:boolean):void{
    }
}
