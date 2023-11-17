import EventNameMap from "../EventNameMap";
import {AnchorType, GroupShapeType, ItemType} from "../../../data/Config";
import IEventMap from "../../interface/IEventMap";
import BehaviorManage from "../BehaviorManage";
import {G6GraphEvent, IG6GraphEvent, INode, Item} from "@antv/g6";
import NodeConstruct from "../../../struct/g6-construct/build-in/NodeConstruct";
import RectGroup from "../../../struct/group-node/RectGroup";
import GraphCustom from "../../../struct/tool/GraphCustom";
import BaseAttrs from "../../../struct/g6-construct/shape/BaseAttrs";
import GroupCfg from "../../../struct/g6-construct/GroupCfg";

const DefaultBehavior: IEventMap = {
    getEvents: (): { [key: string]: string } => {
        return {
            [BehaviorManage.EventName(ItemType.node, EventNameMap.mouseenter)]: EventNameMap.mouseenter,
            [BehaviorManage.EventName(ItemType.node, EventNameMap.mouseleave)]: EventNameMap.mouseleave,
            [BehaviorManage.EventName(ItemType.node, EventNameMap.mousedown)]: EventNameMap.mousedown,
            [BehaviorManage.EventName(ItemType.node, EventNameMap.mousemove)]: EventNameMap.mousemove,
        }
    },
    [EventNameMap.mouseenter]: (e: G6GraphEvent): void => {
        const item: INode = e.item as INode;
        const model: NodeConstruct = item.getModel() as NodeConstruct;
        if (!model.addShape) {
            RectGroup.addRectShape(item);
        } else {
            showChildren(true, item);
        }
    },
    [EventNameMap.mousedown]: (e:IG6GraphEvent) => {
        const baseAttrs = (e.target as GroupCfg).attrs as BaseAttrs;
        switch(baseAttrs.anchorType){
            case AnchorType.connector:
                GraphCustom.Instance.graph.setMode(BehaviorManage.Instance.behaviorMap.AddEdge);
                break;
            case AnchorType.scale:
                GraphCustom.Instance.graph.setMode(BehaviorManage.Instance.behaviorMap.Scale);
                break;
        }
    },
    [EventNameMap.mousemove]:(e)=>{
    },
    [EventNameMap.mouseleave]: (e: IG6GraphEvent): void => {
        const item: INode = e.item as INode;
        const model = item.getModel() as NodeConstruct;
        if (model.addShape) {
            showChildren(false, item)
        }
        GraphCustom.Instance.graph.paint();
    },
}

function showChildren(isShow: boolean, item: Item): void {
    const group = item.getContainer();
    const children = group.getChildren();
    for (let child of children) {
        if (child.cfg.type === GroupShapeType.circle) {
            if (!isShow)
                child.hide();
            else
                child.show();
        }
    }
}

export default DefaultBehavior;
