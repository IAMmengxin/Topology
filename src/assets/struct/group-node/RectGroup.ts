import G6Manager from "../function/G6Manager";
import NodeConstruct from "../g6-construct/build-in/NodeConstruct";
import Config, {AnchorDirect, AnchorType, CursorType, GroupShapeType, NodeBuildInType} from "../../data/Config";
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
        let anchorPoint = Config.AnchorPoints[AnchorDirect.leftMiddle];
        let shapeType = GroupShapeType.circle;
        let anchorType:AnchorType = AnchorType.connector;
        let cursorType = CursorType.crosshair;
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType,AnchorDirect.leftMiddle);
        anchorPoint = Config.AnchorPoints[AnchorDirect.rightMiddle];
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType,AnchorDirect.rightMiddle);
        anchorPoint = Config.AnchorPoints[AnchorDirect.topMiddle];
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType,AnchorDirect.topMiddle);
        anchorPoint = Config.AnchorPoints[AnchorDirect.bottomMiddle];
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType,AnchorDirect.bottomMiddle);

        anchorType = AnchorType.scale;
        anchorPoint = Config.AnchorPoints[AnchorDirect.leftTop];
        cursorType = CursorType.seResize;
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType,AnchorDirect.leftTop);
        anchorPoint = Config.AnchorPoints[AnchorDirect.rightBottom];
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType,AnchorDirect.rightBottom);

        anchorPoint = Config.AnchorPoints[AnchorDirect.rightTop];
        cursorType = CursorType.neResize;
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType,AnchorDirect.rightTop);
        anchorPoint = Config.AnchorPoints[AnchorDirect.leftBottom];
        this.addCircleShape(group,anchorPoint,shapeType,size,anchorType,nodeId,cursorType,AnchorDirect.leftBottom);

        model.addShape = true;
        GraphCustom.Instance.graph.paint();
    }

    static addCircleShape(group: IGroup, anchorPoint: number[], shapeType: GroupShapeType, size: number[],
                    anchorType: AnchorType,nodeId,cursorType:CursorType,anchorDirect:AnchorDirect): void {
        const shapeName = nodeId+'_shape';
        const groupCfg = new GroupCfg(shapeName);
        groupCfg.attrs =
            new CircleShapeAttrs(shapeName, size, anchorPoint,
                anchorType,3,anchorDirect);
        groupCfg.attrs.cursor = cursorType;
        group.addShape(shapeType, <ShapeCfg>groupCfg);
    }
    static ShowShape(isShow:boolean):void{
    }
}
