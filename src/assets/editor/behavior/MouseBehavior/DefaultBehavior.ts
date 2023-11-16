import EventNameMap from "../EventNameMap";
import {ItemType} from "../../../data/Config";
import IEventMap from "../../interface/IEventMap";
import BehaviorManage from "../BehaviorManage";
import {G6GraphEvent, IG6GraphEvent, INode, Item} from "@antv/g6";
import NodeConstruct from "../../../struct/g6-construct/build-in/NodeConstruct";
import RectGroup from "../../../struct/group-node/RectGroup";
import GraphCustom from "../../../struct/tool/GraphCustom";

const DefaultBehavior: IEventMap = {
    getEvents: (): { [key: string]: string } => {
        return {
            [BehaviorManage.EventName(ItemType.node,EventNameMap.mouseenter)]: EventNameMap.mouseenter,
            [BehaviorManage.EventName(ItemType.node,EventNameMap.mouseleave)]: EventNameMap.mouseleave,
            [BehaviorManage.EventName(ItemType.node, EventNameMap.mousedown)]: EventNameMap.mousedown,
        }
    },
    [EventNameMap.mouseenter]:(e:G6GraphEvent):void=>{
        const item:INode = e.item as INode;
        const model:NodeConstruct = item.getModel() as NodeConstruct;
        if(!model.addShape) {
            RectGroup.addRectShape(item);
        }else{

        }
        console.log(GraphCustom.Instance.graph.save())
    },
    [EventNameMap.mousedown]:(e)=>{
    },
    [EventNameMap.mouseleave]:(e:IG6GraphEvent):void=> {
        debugger
        const item:INode = e.item as INode;
        const model = item.getModel() as NodeConstruct;
        if(model.addShape){
            item._cfg.visible = false;
        }
        GraphCustom.Instance.graph.paint();
    },
}

export default DefaultBehavior;
