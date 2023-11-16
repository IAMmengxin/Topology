import IEventMap from "../interface/IEventMap";
import BehaviorManage from "./BehaviorManage";
import {ItemType} from "../../data/Config";
import EventNameMap from "./EventNameMap";

const AddEdge: IEventMap = {
    getEvents: (): { [key: string]: EventNameMap } => {
        return {
            [BehaviorManage.EventName(ItemType.node, EventNameMap.mouseenter)]:EventNameMap.mouseenter,
        }
    }
}
