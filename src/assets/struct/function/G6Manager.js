import GraphCustom from "@/assets/struct/tool/GraphCustom";
import AntVData from "@/assets/data/AntVData";

let Instance = null;
export default class G6Manager {
    //根据id存储节点,type:Map<string,NodeConstruct>
    _nodesById;
    //根据comboId存储节点,type:Map<string,Array<NodeConstruct>>
    _nodesByComboId;

    //根据type存储节点,type:Map<string,NodeConstruct>
    _nodesByType;
    //根据name存储节点,type:Map<string,Array<NodeConstruct>>
    _nodesByName;
    //根据id存储边,type:Map<string,EdgeConstruct>
    _edgesById;
    //根据type存储边,type:Map<string,EdgeConstruct>
    _edgesByType;
    //根据name存储边,type:Map<string,Array<EdgeConstruct>>
    _edgesByName;
    //根据id存储组件,type:Map<string,ComboConstruct>
    _combosById;

    //菜单栏宽度
    constructor() {
        this._nodesByComboId = {};
        this._nodesById = {};
        this._nodesByType = {};
        this._nodesByName = {};
        this._edgesById = {};
        this._edgesByType = {};
        this._edgesByName = {};
        this._combosById = {};
        //菜单栏宽度
        this._menuWidth = 0;
        let nodes = GraphCustom.Instance.graph.getNodes();
        for (let node of nodes) {
            this.addNodeId(node);
            this.addNodeType(node);
            this.addNodeName(node);
        }
        let edges = GraphCustom.Instance.graph.getEdges();
        for (let edge of edges) {
            this.addEdgeId(edge);
            this.addEdgeType(edge);
            this.addEdgeName(edge);
        }
    }

    set menuWidth(value) {
        this._menuWidth = value;
    }

    get menuWidth() {
        return this._menuWidth;
    }

    static get Instance() {
        if (Instance === null) {
            Instance = new G6Manager();
        }
        return Instance;
    }

    addNodeId(iNode) {
        this._nodesById[iNode.id] = iNode;
    }

    addNodeComboId(iNode) {
        if (!iNode.comboId)
            return;
        let nodesByComboId = this._nodesByComboId[iNode.comboId];
        if (!nodesByComboId) {
            nodesByComboId = this._nodesByComboId[iNode.comboId] = [];
        }
        nodesByComboId.push(iNode);
    }

    addNodeType(iNode) {
        let nodesByType = this._nodesByType[iNode.type];
        if (!nodesByType) {
            nodesByType = this._nodesByType[iNode.type] = [];
        }
        nodesByType.push(iNode);
    }

    addNodeName(iNode) {
        let nodesByName = this._nodesByName[iNode.name];
        if (!nodesByName) {
            nodesByName = this._nodesByName[iNode.name] = [];
        }
        nodesByName.push(iNode);
    }

    addEdgeId(iNode) {
        this._edgesById[iNode.id] = iNode;
    }

    addEdgeType(iNode) {
        let edgesByType = this._edgesByType[iNode.type];
        if (!edgesByType) {
            edgesByType = this._edgesByType[iNode.type] = [];
        }
        edgesByType.push(iNode);
    }

    addEdgeName(iNode) {
        let edgesByName = this._edgesByName[iNode.name];
        if (!edgesByName) {
            edgesByName = this._edgesByName[iNode.name] = [];
        }
        edgesByName.push(iNode);
    }

    addComboId(combo) {
        this._combosById[combo.id] = combo;
    }

    /*
    * @return {NodeData}
    * */
    getNodeById(id) {
        return this._nodesById[id];
    }

    /*
    * @return {Array<NodeData>}
    * */
    getNodeByType(type) {
        return this._nodesByType[type];
    }

    /*
    * @return {Array<NodeData>}
    * */
    getNodeByName(name) {
        return this._nodesByName[name];
    }

    /*
* @return {NodeData}
* */
    getEdgeById(id) {
        return this._nodesById[id];
    }

    /*
    * @return {Array<NodeData>}
    * */
    getEdgeByType(type) {
        return this._nodesByType[type];
    }

    /*
    * @return {Array<NodeData>}
    * */
    getEdgeByName(name) {
        return this._nodesByName[name];
    }

    /*
    * @param {NodeConstruct} node 节点数据,type:NodeConstruct
    * */
    static addNode(node) {
        let self = this.Instance;
        if (self._nodesById[node.id])
            return null;
        node.x -= self.menuWidth;
        AntVData.nodes.push(node);
        let graph = GraphCustom.Instance.graph;
        graph.render();
        let iNode = graph.findById(node.id);
        self.addNodeComboId(node);
        self.addNodeId(node);
        self.addNodeName(node);
        self.addNodeType(node);
        return iNode;
    }

    static setMenuWidth(value) {
        this.Instance.menuWidth = value;
    }

    /*
    * @param {EdgeConstruct} edge 边数据,type:EdgeConstruct
    * */
    static addEdge(edge) {
        let self = this.Instance;
        if (self._edgesById[edge.id])
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
    /*
    * @param {string} pre 前缀
    */
    static getRandomId(pre = '') {
        let random = pre+'_'+Math.floor(Math.random() * 100000000);
        while (this.Instance._nodesById[random]) {
            random = pre+'_'+Math.floor(Math.random() * 100000000);
        }
        return random.toString();
    }
}

class NodeData {
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
    constructor(type, id, name, iNode) {
        this._type = type;
        this._id = id;
        this._name = name;
        this._iNode = iNode;
    }

    get type() {
        return this._type;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get INode() {
        return this._iNode;
    }
}
