import DefaultBehavior from "./MouseBehavior/DefaultBehavior";
import {BehaviorOption, IGroup, INode, registerBehavior} from "@antv/g6";
import {GroupShapeType, ItemType} from "../../data/Config";
import EventNameMap from "./EventNameMap";
import AddEdge from "./AddEdge";
import Scale from "./Scale";
import NodeConstruct from "../../struct/g6-construct/build-in/NodeConstruct";
import RectGroup from "../../struct/group-node/RectGroup";

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
        registerBehavior(this.behaviorMap.DefaultBehavior,DefaultBehavior as BehaviorOption)
        registerBehavior(this.behaviorMap.AddEdge,AddEdge as BehaviorOption);
        registerBehavior(this.behaviorMap.Scale,Scale as BehaviorOption);
    }
    static EventName(itemType:ItemType,eventName:EventNameMap){
        return itemType+':'+eventName;
    }
    static setNodeSize(iNode:INode){
        const model:NodeConstruct = <object>iNode.getModel() as NodeConstruct;
        const keyShape = iNode.getKeyShape();
        keyShape.attr({
            width: model.size[0],
            height: model.size[1]
        });
        const group = iNode.getContainer();
        this.destroyCircleChildren(iNode,group);
        RectGroup.addRectShape(iNode);
    }
    static destroyCircleChildren(iNode:INode,group:IGroup){
        const children = group.getChildren();
        for (let child of children) {
            if (child.cfg.type === GroupShapeType.circle) {
                    child.destroy();
            }
        }
    }
}
