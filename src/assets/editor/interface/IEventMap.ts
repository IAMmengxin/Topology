import EventNameMap from "../behavior/EventNameMap";

export default interface IEventMap {
    getEvents: Function,

    [key: string]: Function
}
