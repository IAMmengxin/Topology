import DefaultBehavior from "./MouseBehavior/DefaultBehavior";
import {registerBehavior} from "@antv/g6";
import {ItemType} from "../../data/Config";
import EventNameMap from "./EventNameMap";
import AddEdge from "./AddEdge";
import Scale from "./Scale";

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
        this.behaviorMap = {
            AddEdge:'AddEdge',
            DefaultBehavior:'DefaultBehavior',
            Scale:'Scale',
        }
        this.init();
    }
    init(){
        registerBehavior(this.behaviorMap.DefaultBehavior,DefaultBehavior)
        registerBehavior(this.behaviorMap.AddEdge,AddEdge);
        registerBehavior(this.behaviorMap.Scale,Scale);
    }
    static EventName(itemType:ItemType,eventName:EventNameMap){
        return itemType+':'+eventName;
    }
}
