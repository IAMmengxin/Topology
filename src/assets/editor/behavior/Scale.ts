import IEventMap from "../interface/IEventMap";
import BehaviorManage from "./BehaviorManage";
import {ItemType} from "../../data/Config";
import EventNameMap from "./EventNameMap";
import {IG6GraphEvent, IGroup} from "@antv/g6";
import Vector2 from "../../struct/tool/Vector2";
import GraphCustom from "../../struct/tool/GraphCustom";
import RectShapeAttrs from "../../struct/g6-construct/shape/RectShapeAttrs";
import GroupCfg from "../../struct/g6-construct/GroupCfg";
import G6Manager from "../../struct/function/G6Manager";
import {ext} from '@antv/matrix-util'
import NodeConstruct from "../../struct/g6-construct/build-in/NodeConstruct";
import AntVData from "../../data/AntVData";

const Scale: IEventMap = {
    getEvents: (): { [key: string]: EventNameMap } => {
        return {
            [EventNameMap.mousemove]: EventNameMap.mousemove,
            [EventNameMap.mouseup]: EventNameMap.mouseup,
        }
    },
    [EventNameMap.mousemove]: (e: IG6GraphEvent) => {
        // console.log("点击的位置",G6Manager.Instance.mouseDownPosition);
        const currentPoint = new Vector2(e.clientX, e.clientY);
        // console.log("移动后的位置",currentPoint);
        const difV = currentPoint.sub(G6Manager.Instance.mouseDownPosition);
        const currentNode = G6Manager.Instance.currentNode;
        // const group: IGroup = currentNode.getContainer();
        const attrs: RectShapeAttrs = currentNode.getKeyShape().attr() as RectShapeAttrs;
        const model: NodeConstruct = <object>currentNode.getModel() as NodeConstruct;
        // const width = canvasBox.width;
        // const height = canvasBox.height;
        // group.translate(difV.x/2,difV.y/2);
        model.size = [difV.x + model.size[0], difV.y + model.size[1]];
        currentNode.getKeyShape().attr({
            width: model.size[0],
            height: model.size[1],
        })
        const position = new Vector2(attrs.x, attrs.y);
        // const width = Math.abs(attrs.width);
        // const height = Math.abs(attrs.height);
        // const ratioX = (difV.x + width) / width;
        // const ratioY = (difV.y + height) / height;
        // group.scale(ratioX,ratioY)
        G6Manager.Instance.mouseDownPosition = currentPoint;
        GraphCustom.Instance.graph.paint();
        // console.log(GraphCustom.Instance.graph.save());
        // console.log(currentNode);
    },
    [EventNameMap.mouseup]: (e: IG6GraphEvent) => {
        GraphCustom.Instance.graph.setMode('edit');
    },
}
export default Scale;
