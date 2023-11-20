import G6, {Graph, Item} from "@antv/g6";
import AntVData from "../../data/AntVData";
import {AnimationCustom} from "../function/AnimationCustom";
import Config, {Modes} from "../../data/Config";
import BehaviorManage from "../../editor/behavior/BehaviorManage";

let GraphCustomIns: GraphCustom = null;
let lastSelectNode: Item = null;
export default class GraphCustom {
    _graph: Graph;

    constructor() {
        this._graph = null;
    }

    static get Instance(): GraphCustom {
        if (GraphCustomIns === null) {
            GraphCustomIns = new GraphCustom();
        }
        return GraphCustomIns;
    }

    get graph(): Graph {
        return this._graph;
    }

    createGraph(mountNode:HTMLElement) {
        // 创建 G6 图实例
        const graph = new G6.Graph({
            container: mountNode, // 指定图画布的容器 id，与第 9 行的容器对应
            // 画布宽高
            // width: Math.floor(window.innerWidth - window.innerWidth / 10),
            width: mountNode.offsetWidth,
            // height: window.innerHeight - 4,
            height: mountNode.offsetHeight,
            //启用combos时需要将groupByTypes设为false以获得正确的zIndex
            groupByTypes: false,
            modes: {
                // default:['drag-canvas', 'zoom-canvas', 'drag-node']
                default: [
                    'zoom-canvas',
                    BehaviorManage.Instance.behaviorMap.DefaultBehavior,
                ],
                edit: [
                    'drag-node',
                    // 'click-select',
                    // {
                    //     type: Modes.createEdge,
                    //     trigger: 'click'
                    // },
                    BehaviorManage.Instance.behaviorMap.DefaultBehavior,
                ],
                AddEdge:['AddEdge'],
                Scale:['Scale'],
            },
            nodeStateStyles:{
                'select:1':{
                    stroke: '#ff1865',
                    lineWidth: 3,
                },
                'select:0':{
                    // stroke: '#3fff18',
                    lineWidth: 1,
                },
                click:{
                    stroke: '#1890ff',
                },
            },
        });
        graph.setMode('edit');
        this._graph = graph;
        graph.on("node:click", (ev) => {
            console.log("点击的Node：", ev.item);
            const node = ev.item;
            if(lastSelectNode!==null){
                graph.setItemState(lastSelectNode,'select','0');
                if(lastSelectNode!==node){
                    graph.setItemState(node,'select','1')
                    lastSelectNode = node;
                }else{
                    lastSelectNode = null;
                }
            }else{
                graph.setItemState(node,'select','1');
                lastSelectNode = node;
            }
        })
        graph.on("canvas:click", (ev) => {
            if(lastSelectNode!==null) {
                graph.setItemState(lastSelectNode,'select','0');
                lastSelectNode = null;
            }
        })
        graph.on("combo:click", (ev) => {
            console.log("点击的组件:", ev)
        })
        graph.on("edge:click", (ev) => {
            console.log("点击的边:", ev)
        })
        graph.on('edge:mouseenter', (ev) => {
            const edge = ev.item;
            graph.setItemState(edge, 'active', true);
        })
        graph.on('edge:mouseleave', (ev) => {
            graph.setItemState(ev.item, 'active', false);
        })
        // graph.setMode('edit');
// 读取数据
        graph.data(<object>AntVData);
// 渲染图
        AnimationCustom.EdgeAnim(Config.AnimEdge[0]).addFlowAnim();
        AnimationCustom.EdgeAnim(Config.AnimEdge[1]).addFlowAnim();
        AnimationCustom.EdgeAnim(Config.AnimEdge[2]).addLineAnim();
        AnimationCustom.EdgeAnim(Config.AnimEdge[3]).addPolyline();
        graph.render();
    }
}
