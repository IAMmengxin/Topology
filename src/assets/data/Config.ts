export const Config = {
    AnchorPoints: [
        [0, 0],     //左上
        [0, 0.5],   //左侧中间
        [0, 1],     //左下
        [0.5, 1],   //下侧中间
        [1, 1],     //右下
        [1, 0.5],   //右侧中间
        [1, 0],     //右上
        [0.5, 0],   //上侧中间
    ],
    AnchorDirect: {
        leftTop: 0,     //左上
        leftMiddle: 1,  //左侧中间
        leftBottom: 2,  //左下
        bottomMiddle: 3,//下侧中间
        rightBottom: 4, //右下
        rightMiddle: 5, //右侧中间
        rightTop: 6,    //右上
        topMiddle: 7,   //上侧中间
    },
    AnimEdge: ["polyline0", "polyline1", "polyline2", "polyline3"],
    AnchorColor: '#6ab7ff',
}

export enum LabelPosition {
    center = 'center',
    left = 'left',
    right = 'right',
    top = 'top',
    bottom = 'bottom'
}

//内置节点类型
export enum NodeBuildInType {
    circle = 'circle',
    rect = 'rect',
    ellipse = 'ellipse',
    diamond = 'diamond',
    triangle = 'triangle',
    star = 'star',
    image = 'image',
    modelRect = 'modelRect',
    //甜甜圈
    donut = 'donut'
}

//添加组时可选定的类型
export enum GroupShapeType {
    rect = 'rect',//矩形
    circle = 'circle',//圆
    fan = 'fan',//扇形
    ellipse = 'ellipse',//椭圆
    marker = 'marker',//标记
    image = 'image',//图片
    polygon = 'polygon',//多边形
    path = 'path',//路径
    text = 'text',//文本
}

//内嵌的shape的类型（按功能区分）
export enum AnchorType {
    connector = 0,
    scale = 1
}

//自定义节点类型
export enum NodeCustomType {
}


export enum Modes {
    //拖动 Combo
    dragCombo = 'drag-combo',
    //收起和展开 Combo。
    collapseExpandCombo = 'collapse-expand-combo',
    //拖拽画布
    dragCanvas = 'drag-canvas',
    //滚动画布
    scrollCanvas = 'scroll-canvas',
    //缩放画布
    zoomCanvas = 'zoom-canvas',
    //拖拽节点
    dragNode = 'drag-node',
    //点击并选中节点，再次点击节点或点击 Canvas 取消选中状态；
    clickSelect = 'click-select',
    //节点文本提示；
    tooltip = 'tooltip',
    //使用方式基本与 tooltip 相同，但是移到边时触发。
    edgeTooltip = 'edge-tooltip',
    //当鼠标移到某节点时，突出显示该节点以及与其直接关联的节点和连线；
    activateRelations = 'activate-relations',
    //拖动框选节点；
    brushSelect = 'brush-select',
    //自由圈选；
    lassoSelect = 'lasso-select',
    //只适用于树图，展开或收起子树；
    collapseExpand = 'collapse-expand',
    //通过交互创建边；
    createEdge = 'create-edge',
    //允许终端用户使用键盘组合键调用 Graph 的函数，例如按下键盘上的 control 与 1，对图进行适应画布。
    // 注意：终端用户使用该功能时焦点必须在画布上才能够正确触发；
    shortcutsCall = 'shortcuts-call',
}

export enum ItemType {
    node = 'node', edge = 'edge', combo = 'combo', vedge = 'vedge'
}
//https://developer.mozilla.org/en-US/docs/Web/CSS/cursor,类型的详情见链接
export enum CursorType{
    auto = 'auto',default='default',contextMenu='context-menu',help='help',pointer='pointer',
    progress='progress',wait='wait',cell='cell',crosshair='crosshair',text='text',verticalText='vertical-text',
    alias='alias',copy='copy',move='move',noDrop='no-drop',notAllowed='not-allowed',grab='grab',
    grabbing='grabbing',allScroll='all-scroll',colResize='col-resize',rowResize='row-resize',
    nResize='n-resize',eResize='e-resize',sResize='s-resize',wResize='w-resize',neResize='ne-resize',
    nwResize='nw-resize',seResize='se-resize',swResize='sw-resize',ewResize='ew-resize',nsResize='ns-resize',
    neswResize='nesw-resize',nwseResize='nwse-resize',zoomIn='zoom-in',zoomOut='zoom-out'
}

export default Config;
