import DefaultBehavior from "./MouseBehavior/DefaultBehavior";
import IEventMap from "../interface/IEventMap";
import {registerBehavior, registerNode} from "@antv/g6";
import {ItemType} from "../../data/Config";
import EventNameMap from "./EventNameMap";

let Instance:BehaviorManage = null;

export default class BehaviorManage{
    static get Instance(){
        if(Instance===null){
            Instance = new BehaviorManage();
        }
        return Instance;
    }
    behaviorMap:{[key:string]:string};
    constructor() {
        this.behaviorMap = {};
        this.init();
    }
    init(){
        this.behaviorMap.DefaultBehavior = 'DefaultBehavior';
        registerBehavior(this.behaviorMap.DefaultBehavior,DefaultBehavior)
    }
    static EventName(itemType:ItemType,eventName:EventNameMap){
        return itemType+':'+eventName;
    }
}
