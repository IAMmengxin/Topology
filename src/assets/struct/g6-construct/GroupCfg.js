export default class GroupCfg{
    //图形样式，必须配置，例如：{x: 0, y: 10, fill: '#0f0'}
    attrs;
    //图形分组的标识，非必须指定，可以不唯一。在 G6 3.3 及以后版本中必须指定。另外，
    // name 可以用于组内搜索到该元素：const shape = group.find(element =>
    // element.get('name') === 'shape-name')，find 函数用法见 find(fn). type:string
    name;
    //非必须指定，该图形分组是否可以被鼠标事件捕捉到，即是否能够响应各鼠标事件。非必须指定. type:bool
    capture;
    //非必须指定，该图形分组是否可见。非必须指定，默认为 true。type:bool
    visible;
    //值为 true 时，鼠标在该自定义节点的这个图形分组上才能够响应 dragstart，drag，与 dragend 事件；
    // 在实例化图时的 modes 中配置的 'drag-node' 交互才可以在该图形分组上进行拖拽时生效。type:bool
    draggable;
    //type:number
    zIndex;
    constructor(id,capture = true,visible = true,draggable = false
                ,name = null,attrs = null,zIndex = 0) {
        this.attrs = attrs;
        this.id = id;
        this.name = name===null?id:name;
        this.capture = capture;
        this.visible = visible;
        this.draggable = draggable;
        this.zIndex = zIndex;
    }
}
