import IEventMap from "../interface/IEventMap";
import BehaviorManage from "./BehaviorManage";
import {ItemType} from "../../data/Config";
import EventNameMap from "./EventNameMap";
import {IG6GraphEvent} from "@antv/g6";
import GraphCustom from "../../struct/tool/GraphCustom";

const AddEdge: IEventMap = {
    getEvents: (): { [key: string]: EventNameMap } => {
        return {
            [EventNameMap.mousemove]:EventNameMap.mousemove,
            [EventNameMap.mouseup]:EventNameMap.mouseup,
        }
    },
    [EventNameMap.mousemove]:(e:IG6GraphEvent)=>{
        console.log("move:",e)
    },
    [EventNameMap.mouseup]:(e:IG6GraphEvent)=>{
        console.log("up:",e)
        GraphCustom.Instance.graph.setMode('edit');
    },
}
export default AddEdge;
