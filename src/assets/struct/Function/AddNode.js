import AntVData from "@/assets/Data/AntVData";

export default class AddNode{
    /*
    * @param {NodeConstruct} node 节点数据,type:NodeConstruct
    * @param {Graph} graph G6图实例,type:Graph
    * */
    static AddNode(node,graph){
        AntVData.nodes.push(node);
        graph.render();
    }
}
