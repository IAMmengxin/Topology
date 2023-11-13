import GraphCustom from "@/assets/struct/Tool/GraphCustom";
import AntVData from "@/assets/Data/AntVData";
let Instance = null;
export default class NodeManager{
    //根据id存储节点,type:Map<string,NodeData>
    _nodesById;
    //根据type存储节点,type:Map<string,NodeData>
    _nodesByType;
    //根据name存储节点,type:Map<string,Array<NodeData>>
    _nodesByName;
    //根据id存储边,type:Map<string,NodeData>
    _edgesById;
    //根据type存储边,type:Map<string,NodeData>
    _edgesByType;
    //根据name存储边,type:Map<string,Array<NodeData>>
    _edgesByName;
    //菜单栏宽度
    constructor() {
        this._nodesById = {};
        this._nodesByType = {};
        this._nodesByName = {};
        this._edgesById = {};
        this._edgesByType = {};
        this._edgesByName = {};
        //菜单栏宽度
        this._menuWidth = 0;
        let nodes = GraphCustom.Instance.graph.getNodes();
        for(let node of nodes){
            this.addNodeId(node);
            this.addNodeType(node);
            this.addNodeName(node);
        }
        let edges = GraphCustom.Instance.graph.getEdges();
        for(let edge of edges){
            this.addEdgeId(edge);
            this.addEdgeType(edge);
            this.addEdgeName(edge);
        }
    }
    set menuWidth(value){
        this._menuWidth = value;
    }
    get menuWidth(){
        return this._menuWidth;
    }
    static get Instance(){
        if(Instance===null){
            Instance = new NodeManager();
        }
        return Instance;
    }

    addNodeId(iNode){
        this._nodesById[iNode._cfg.model.id] = iNode;
    }
    addNodeType(iNode){
        let nodesByType = this._nodesByType[iNode._cfg.model.type];
        if(!nodesByType) {
            nodesByType = this._nodesByType[iNode._cfg.model.type] = [];
        }
        nodesByType.push(iNode);
    }
    addNodeName(iNode){
        let nodesByName = this._nodesByName[iNode._cfg.model.name];
        if(!nodesByName) {
            nodesByName = this._nodesByName[iNode._cfg.model.name] = [];
        }
        nodesByName.push(iNode);
    }
    addEdgeId(iNode){
        this._edgesById[iNode._cfg.model.id] = iNode;
    }
    addEdgeType(iNode){
        let edgesByType = this._edgesByType[iNode._cfg.model.type];
        if(!edgesByType) {
            edgesByType = this._edgesByType[iNode._cfg.model.type] = [];
        }
        edgesByType.push(iNode);
    }
    addEdgeName(iNode){
        let edgesByName = this._edgesByName[iNode._cfg.model.name];
        if(!edgesByName) {
            edgesByName = this._edgesByName[iNode._cfg.model.name] = [];
        }
        edgesByName.push(iNode);
    }

    /*
    * @return {NodeData}
    * */
    getNodeById(id){
        return this._nodesById[id];
    }
    /*
    * @return {Array<NodeData>}
    * */
    getNodeByType(type){
        return this._nodesByType[type];
    }

    /*
    * @return {Array<NodeData>}
    * */
    getNodeByName(name){
        return this._nodesByName[name];
    }
    /*
* @return {NodeData}
* */
    getEdgeById(id){
        return this._nodesById[id];
    }
    /*
    * @return {Array<NodeData>}
    * */
    getEdgeByType(type){
        return this._nodesByType[type];
    }

    /*
    * @return {Array<NodeData>}
    * */
    getEdgeByName(name){
        return this._nodesByName[name];
    }
    /*
    * @param {NodeConstruct} node 节点数据,type:NodeConstruct
    * */
    static addNode(node){
        let self = this.Instance;
        if(self._nodesById[node.id])
            return false;
        node.x -= self.menuWidth;
        AntVData.nodes.push(node);
        let graph = GraphCustom.Instance.graph;
        graph.render();
        let iNode = graph.findById(node.id);
        self.addNodeId(iNode);
        self.addNodeName(iNode);
        self.addNodeType(iNode);
        return true;
    }
    static setMenuWidth(value){
        this.Instance.menuWidth = value;
    }
    /*
    * @param {EdgeConstruct} edge 边数据,type:EdgeConstruct
    * */
    static addEdge(edge){
        let self = this.Instance;
        if(self._edgesById[edge.id])
            return false;
        AntVData.edges.push(edge);
        let graph = GraphCustom.Instance.graph;
        graph.render();
        let iNode = graph.findById(edge.id);
        self.addEdgeId(iNode);
        self.addEdgeName(iNode);
        self.addEdgeType(iNode);
        return true;
    }
    //随机生成一个id
    static getRandomId(){
        let random = Math.floor(Math.random()*100000000);
        while(this.Instance._nodesById[random]){
            random = Math.floor(Math.random()*100000000);
        }
        return random.toString();
    }
}
class NodeData{
    //节点类型
    _type;
    //节点id
    _id;
    //节点名称
    _name;
    //INode
    _iNode;
    /*
    * @param {Config.NodeBuildInType} type 节点类型,type:NodeBuildInType
    * @param {string} id 节点id,type:string
    * @param {string} name 节点名称,type:string
    * */
    constructor(type,id,name,iNode) {
        this._type = type;
        this._id = id;
        this._name = name;
        this._iNode = iNode;
    }
    get type(){
        return this._type;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get INode(){
        return this._iNode;
    }
}
