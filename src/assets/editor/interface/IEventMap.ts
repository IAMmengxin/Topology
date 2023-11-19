import EventNameMap from "../behavior/EventNameMap";
import {BehaviorOption} from "@antv/g6";

export default interface IEventMap{
    getEvents: Function,

    [key: string]: Function
}
