import GraphCustom from "../tool/GraphCustom";
import AntVData from "../../data/AntVData";
import {ICombo, IEdge, INode, Item} from "@antv/g6";
import NodeConstruct from "../g6-construct/build-in/NodeConstruct";
import EdgeConstruct from "../g6-construct/build-in/EdgeConstruct";
import {ItemType, NodeBuildInType} from "../../data/Config";

let Instance: G6Manager = null;
export default class G6Manager {
    //根据id存储节点,type:Map<string,NodeConstruct>
    _nodesById:Map<string,INode>;
    //根据comboId存储节点,type:Map<string,Array<NodeConstruct>>
    _nodesByComboId:Map<string,Array<INode>>;

    //根据type存储节点,type:Map<string,NodeConstruct>
    _nodesByType:Map<string,Array<INode>>;
    //根据name存储节点,type:Map<string,Array<NodeConstruct>>
    _nodesByName:Map<string,Array<INode>>;
    //根据id存储边,type:Map<string,EdgeConstruct>
    _edgesById:Map<string,IEdge>;
    //根据type存储边
    _edgesByType:Map<string,Array<IEdge>>;
    //根据name存储边,type:Map<string,Array<EdgeConstruct>>
    _edgesByName:Map<string,Array<IEdge>>;
    //根据id存储组件,type:Map<string,ComboConstruct>
    _combosById:Map<string,ICombo>;
    _menuWidth: number;

    //菜单栏宽度
    constructor() {
        this._nodesByComboId = new Map<string, Array<INode>>();
        this._nodesById = new Map<string, INode>();
        this._nodesByType = new Map<string, Array<INode>>();
        this._nodesByName = new Map<string, Array<INode>>();
        this._edgesById = new Map<string, IEdge>();
        this._edgesByType = new Map<string,Array<IEdge> >();
        this._edgesByName = new Map<string, Array<IEdge>>();
        this._combosById = new Map<string, ICombo>();
        //菜单栏宽度
        this._menuWidth = 0;
        let nodes = GraphCustom.Instance.graph.getNodes();
        for (let node of nodes) {
            this.addNodeId(node._cfg.id,node);
            this.addNodeType(node._cfg.type,node);
            this.addNodeName(node._cfg.model['name'],node);
            this.addNodeComboId(node._cfg.model['comboId'],node);
        }
        let edges = GraphCustom.Instance.graph.getEdges();
        for (let edge of edges) {
            this.addEdgeId(edge._cfg.id,edge);
            this.addEdgeType(edge._cfg.type,edge);
            this.addEdgeName(edge._cfg.model['name'],edge);
        }
        let combos = GraphCustom.Instance.graph.getCombos();
        for (let combo of combos) {
            this.addNodeComboId(combo._cfg.id,combo);
        }
    }

    set menuWidth(value) {
        this._menuWidth = value;
    }

    get menuWidth() {
        return this._menuWidth;
    }

    static get Instance(): G6Manager {
        if (Instance === null) {
            Instance = new G6Manager();
        }
        return Instance;
    }

    addNodeId(id:string,iNode: INode): void {
        this._nodesById.set(id,iNode);
    }

    addNodeComboId(comboId:string, iNode: INode): void {
        if (!comboId)
            return;
        let nodesByComboId:INode[] = this._nodesByComboId.get(comboId);
        if (!nodesByComboId) {
            this._nodesByComboId.set(comboId,new Array<INode>());
            nodesByComboId = this._nodesByComboId.get(comboId);
        }
        nodesByComboId.push(iNode);
    }

    addNodeType(type:string,iNode: INode): void {
        let nodesByType = this._nodesByType.get(type);
        if (!nodesByType) {
            this._nodesByType.set(type, []);
            nodesByType = this._nodesByType.get(type);
        }
        nodesByType.push(iNode);
    }

    addNodeName(name:string,iNode:INode) {
        let nodesByName = this._nodesByName.get(name);
        if (!nodesByName) {
            this._nodesByName.set(name,new Array<INode>());
            nodesByName = this._nodesByName.get(name);
        }
        nodesByName.push(iNode);
    }

    addEdgeId(id:string,iEdge:IEdge) {
        this._edgesById.set(id, iEdge);
    }

    addEdgeType(type:string,iEdge:IEdge) {
        let edgesByType = this._edgesByType.get(type);
        if (!edgesByType) {
            this._edgesByType.set(type,  []);
            edgesByType = this._edgesByType.get(type);
        }
        edgesByType.push(iEdge);
    }

    addEdgeName(name:string,iEdge:IEdge) {
        let edgesByName = this._edgesByName.get(name);
        if (!edgesByName) {
            this._edgesByName.set(name, []);
            edgesByName = this._edgesByName.get(name);
        }
        edgesByName.push(iEdge);
    }

    addComboId(combo) {
        this._combosById.set(combo.id, combo);
    }

    /*
    * @return {NodeData}
    * */
    public getNodeById(id) {
        return this._nodesById.get(id);
    }

    /*
    * @return {Array<NodeData>}
    * */
    public getNodeByType(type) {
        return this._nodesByType.get(type);
    }

    /*
    * @return {Array<NodeData>}
    * */
    public getNodeByName(name) {
        return this._nodesByName.get(name);
    }

    /*
* @return {NodeData}
* */
    public getEdgeById(id) {
        return this._nodesById.get(id);
    }

    /*
    * @return {Array<NodeData>}
    * */
    getEdgeByType(type) {
        return this._nodesByType.get(type);
    }

    /*
    * @return {Array<NodeData>}
    * */
    getEdgeByName(name) {
        return this._nodesByName.get(name);
    }

    /*
    * @param {NodeConstruct} node 节点数据,type:NodeConstruct
    * */
    static addNode(node: NodeConstruct): INode {
        let self = this.Instance;
        if (self._nodesById.get(node.id))
            return null;
        node.x -= self.menuWidth;
        AntVData.nodes.push(node);
        graph.addItem()
        let graph = GraphCustom.Instance.graph;
        graph.paint();
        let iNode: INode = graph.findById(node.id) as INode;
        self.addNodeComboId(node.comboId,iNode);
        self.addNodeId(node.id,iNode);
        self.addNodeName(node.name,iNode);
        self.addNodeType(node.type,iNode);
        return iNode;
    }

    static addItem(type:ItemType,model:NodeConstruct)

    static setMenuWidth(value): void {
        this.Instance.menuWidth = value;
    }

    /*
    * @param {EdgeConstruct} edge 边数据,type:EdgeConstruct
    * */
    static addEdge(edge:EdgeConstruct):boolean {
        let self = this.Instance;
        if (self._edgesById.get(edge.id))
            return false;
        AntVData.edges.push(edge);
        let graph = GraphCustom.Instance.graph;
        graph.paint();
        let iNode:IEdge = graph.findById(edge.id) as IEdge;
        self.addEdgeId(edge.id,iNode);
        self.addEdgeName(edge.name,iNode);
        self.addEdgeType(edge.type,iNode);
        return true;
    }

    //随机生成一个id
    /*
    * @param {string} pre 前缀
    */
    static getRandomId(pre = '') {
        let random = pre + '_' + Math.floor(Math.random() * 100000000);
        while (this.Instance._nodesById.get(random)) {
            random = pre + '_' + Math.floor(Math.random() * 100000000);
        }
        return random.toString();
    }
}

class NodeData<T> {
    //节点类型
    _key;
    //INode
    _value: T;

    /*
    * @param {Config.NodeBuildInType} type 节点类型,type:NodeBuildInType
    * @param {string} id 节点id,type:string
    * @param {string} name 节点名称,type:string
    * */
    constructor(key: string, value: T) {
        this._value = value;
    }


    get key() {
        return this._key;
    }

    get value() {
        return this._value;
    }
}
