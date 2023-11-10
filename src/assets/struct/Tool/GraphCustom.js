import G6 from "@antv/g6";
import data from "@/assets/Data/AntVData";
import {AnimationCustom} from "@/assets/struct/Function/AnimationCustom";
import config from "@/assets/Data/Config";

let GraphCustomIns = null;
let lastSelectNode = null;
export default class GraphCustom{
    graph;
    constructor() {
        this.graph = null;
    }
    static get Instance(){
        if(GraphCustomIns===null){
            GraphCustomIns = new GraphCustom();
        }
        return GraphCustomIns;
    }
    createGraph(mountNode){
        // 创建 G6 图实例
        const graph = new G6.Graph({
            container: mountNode.value, // 指定图画布的容器 id，与第 9 行的容器对应
            // 画布宽高
            width: window.innerWidth-window.innerWidth/10,
            height: window.innerHeight,
            modes: {
                // default:['drag-canvas', 'zoom-canvas', 'drag-node']
                default: ['zoom-canvas'],
                edit: ['drag-node','click-select']
            }
        });
        graph.setMode('edit')
        this.graph = graph;
        graph.on("node:click", (ev) => {
            console.log("点击的Node：", ev.item._cfg);
            const edge = ev.item;
            graph.setItemState(edge,'selected',!edge.hasState('selected'))
            if(lastSelectNode!==edge){
                if(lastSelectNode!==null){
                    graph.setItemState(lastSelectNode,'selected',false)
                }
                lastSelectNode = edge;
            }
        })
        graph.on("combo:click", (ev) => {
            console.log("点击的组件:", ev)
        })
        graph.on("edge:click", (ev) => {
            console.log("点击的边:", ev)
        })
        graph.on('edge:mouseenter',(ev)=>{
            const edge = ev.item;
            graph.setItemState(edge,'active',true);
        })
        graph.on('edge:mouseleave',(ev)=>{
            graph.setItemState(ev.item,'active',false);
        })
        // graph.setMode('edit');
// 读取数据
        graph.data(data);
// 渲染图
        graph.render();
        AnimationCustom.EdgeAnim(config.animEdge[0]).addFlowAnim();
        AnimationCustom.EdgeAnim(config.animEdge[1]).addFlowAnim();
        AnimationCustom.EdgeAnim(config.animEdge[2]).addLineAnim();
        AnimationCustom.EdgeAnim(config.animEdge[3]).addPolyline();
    }
}
