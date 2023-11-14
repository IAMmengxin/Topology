import G6 from "@antv/g6";
import AntVData from "@/assets/data/AntVData";
import {AnimationCustom} from "@/assets/struct/function/AnimationCustom";
import Config from "@/assets/data/Config";

let GraphCustomIns = null;
let lastSelectNode = null;
export default class GraphCustom {
    _graph;

    constructor() {
        this._graph = null;
    }

    static get Instance() {
        if (GraphCustomIns === null) {
            GraphCustomIns = new GraphCustom();
        }
        return GraphCustomIns;
    }

    get graph() {
        return this._graph;
    }

    createGraph(mountNode) {
        // 创建 G6 图实例
        const graph = new G6.Graph({
            container: mountNode.value, // 指定图画布的容器 id，与第 9 行的容器对应
            // 画布宽高
            width: Math.floor(window.innerWidth - window.innerWidth / 10),
            height: window.innerHeight - 4,
            //启用combos时需要将groupByTypes设为false以获得正确的zIndex
            groupByTypes: false,
            modes: {
                // default:['drag-canvas', 'zoom-canvas', 'drag-node']
                default: ['zoom-canvas'],
                edit: ['drag-node', 'click-select']
            }
        });
        graph.setMode('edit')
        this._graph = graph;
        // graph.on("node:click", (ev) => {
        //     console.log("点击的Node：", ev.item);
        //     const edge = ev.item;
        //     graph.setItemState(edge,'selected',!edge.hasState('selected'))
        //     if(lastSelectNode!==edge){
        //         if(lastSelectNode!==null){
        //             graph.setItemState(lastSelectNode,'selected',false)
        //         }
        //         lastSelectNode = edge;
        //     }
        // })
        graph.on("combo:click", (ev) => {
            console.log("点击的组件:", ev)
        })
        graph.on("edge:click", (ev) => {
            console.log("点击的边:", ev)
        })
        graph.on('node:mouseenter', (e) => {
            const node = e.item;
            graph.setItemState(node, 'hover', true);
            graph.paint();
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
        graph.data(AntVData);
// 渲染图
        graph.render();
        AnimationCustom.EdgeAnim(Config.AnimEdge[0]).addFlowAnim();
        AnimationCustom.EdgeAnim(Config.AnimEdge[1]).addFlowAnim();
        AnimationCustom.EdgeAnim(Config.AnimEdge[2]).addLineAnim();
        AnimationCustom.EdgeAnim(Config.AnimEdge[3]).addPolyline();
    }
}
