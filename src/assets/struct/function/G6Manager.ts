import GraphCustom from "../tool/GraphCustom";
import {Graph, ICombo, IEdge, INode, ModelConfig} from "@antv/g6";
import NodeConstruct from "../g6-construct/build-in/NodeConstruct";
import EdgeConstruct from "../g6-construct/build-in/EdgeConstruct";
import {ItemType} from "../../data/Config";
import BaseConstruct from "../g6-construct/build-in/BaseConstruct";
import Vector2 from "../tool/Vector2";

let Instance: G6Manager = null;
export default class G6Manager {
    //根据id存储节点,type:Map<string,NodeConstruct>
    _nodesById: { [key: string]: INode };
    //根据comboId存储节点,type:Map<string,Array<NodeConstruct>>
    _nodesByComboId: { [key: string]: Array<INode> };

    //根据type存储节点,type:Map<string,NodeConstruct>
    _nodesByType: { [key: string]: Array<INode> };
    //根据name存储节点,type:Map<string,Array<NodeConstruct>>
    _nodesByName: { [key: string]: Array<INode> };
    //根据id存储边,type:Map<string,EdgeConstruct>
    _edgesById: { [key: string]: IEdge };
    //根据type存储边
    _edgesByType: { [key: string]: Array<IEdge> };
    //根据name存储边,type:Map<string,Array<EdgeConstruct>>
    _edgesByName: { [key: string]: Array<IEdge> };
    //根据id存储组件,type:Map<string,ComboConstruct>
    _combosById: { [key: string]: ICombo };
    _menuWidth: number;
    //鼠标点击的位置
    mouseDownPosition: Vector2;
    //当前选中的节点
    currentNode:INode;

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
        this.mouseDownPosition = Vector2.Zero;
        this.currentNode = null;
        let nodes = GraphCustom.Instance.graph.getNodes();
        for (let node of nodes) {
            const nodeConstruct = <unknown>node.getModel() as NodeConstruct;
            this.addNodeId(node._cfg.id, node);
            this.addNodeType(node._cfg.type, node);
            this.addNodeName(nodeConstruct.name, node);
            this.addNodeComboId(nodeConstruct.comboId, node);
        }
        let edges = GraphCustom.Instance.graph.getEdges();
        for (let edge of edges) {
            const edgeCfg: EdgeConstruct = edge._cfg as EdgeConstruct;
            const edgeConstruct = <unknown>edge.getModel() as NodeConstruct;
            this.addEdgeId(edgeCfg.id, edge);
            this.addEdgeType(edgeCfg.type, edge);
            this.addEdgeName(edgeConstruct.name, edge);
        }
        let combos = GraphCustom.Instance.graph.getCombos();
        for (let combo of combos) {
            this.addNodeComboId(combo._cfg.id, combo);
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

    addNodeId(id: string, iNode: INode): void {
        this._nodesById[id] = iNode;
    }

    addNodeComboId(comboId: string, iNode: INode): void {
        if (!comboId)
            return;
        let nodesByComboId: INode[] = this._nodesByComboId[comboId];
        if (!nodesByComboId) {
            nodesByComboId = this._nodesByComboId[comboId] = new Array<INode>();
        }
        nodesByComboId.push(iNode);
    }

    addNodeType(type: string, iNode: INode): void {
        let nodesByType = this._nodesByType[type];
        if (!nodesByType) {
            nodesByType = this._nodesByType[type] = [];
        }
        nodesByType.push(iNode);
    }

    addNodeName(name: string, iNode: INode) {
        let nodesByName = this._nodesByName[name];
        if (!nodesByName) {
            nodesByName = this._nodesByName[name] = new Array<INode>();
        }
        nodesByName.push(iNode);
    }

    addEdgeId(id: string, iEdge: IEdge) {
        this._edgesById[id] = iEdge;
    }

    addEdgeType(type: string, iEdge: IEdge) {
        let edgesByType = this._edgesByType[type];
        if (!edgesByType) {
            edgesByType = this._edgesByType[type] = [];
        }
        edgesByType.push(iEdge);
    }

    addEdgeName(name: string, iEdge: IEdge) {
        let edgesByName = this._edgesByName[name];
        if (!edgesByName) {
            edgesByName = this._edgesByName[name] = [];
        }
        edgesByName.push(iEdge);
    }

    addComboId(combo) {
        this._combosById[combo.id] = combo;
    }

    /*
    * @return {NodeData}
    * */
    public getNodeById(id) {
        return this._nodesById[id];
    }

    /*
    * @return {Array<NodeData>}
    * */
    public getNodeByType(type) {
        return this._nodesByType[type];
    }

    /*
    * @return {Array<NodeData>}
    * */
    public getNodeByName(name) {
        return this._nodesByName[name];
    }

    /*
* @return {NodeData}
* */
    public getEdgeById(id) {
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
    static addNode(node: NodeConstruct): INode {
        let self = this.Instance;
        if (self._nodesById[node.id])
            return null;
        node.x -= self.menuWidth;
        // AntVData.nodes.push(node);
        let graph = GraphCustom.Instance.graph;
        this.addItem(graph, ItemType.node, <unknown>node as ModelConfig);
        graph.paint();
        let iNode: INode = graph.findById(node.id) as INode;
        self.addNodeComboId(node.comboId, iNode);
        self.addNodeId(node.id, iNode);
        self.addNodeName(node.name, iNode);
        self.addNodeType(node.type, iNode);
        return iNode;
    }

    static addItem(graph: Graph, type: ItemType, model: ModelConfig, stack = true): void {
        graph.addItem(type, model, stack);
    }

    static setMenuWidth(value): void {
        this.Instance.menuWidth = value;
    }

    /*
    * @param {EdgeConstruct} edge 边数据,type:EdgeConstruct
    * */
    static addEdge(edge: EdgeConstruct): boolean {
        let self = this.Instance;
        if (self._edgesById[edge.id])
            return false;
        // AntVData.edges.push(edge);
        let graph = GraphCustom.Instance.graph;
        graph.paint();
        let iNode: IEdge = graph.findById(edge.id) as IEdge;
        self.addEdgeId(edge.id, iNode);
        self.addEdgeName(edge.name, iNode);
        self.addEdgeType(edge.type, iNode);
        return true;
    }

    //随机生成一个id
    /*
    * @param {string} pre 前缀
    */
    static getRandomId(pre = '') {
        let random = pre + '_' + Math.floor(Math.random() * 100000000);
        while (this.Instance._nodesById[random]) {
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
