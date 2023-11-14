const Config = {
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
    LabelPosition: {
        center: 'center',
        left: 'left',
        right: 'right',
        top: 'top',
        bottom: 'bottom'
    },
    //内置节点类型
    NodeBuildInType: {
        circle: 'circle',
        rect: 'rect',
        ellipse: 'ellipse',
        diamond: 'diamond',
        triangle: 'triangle',
        star: 'star',
        image: 'image',
        modelRect: 'modelRect',
        //甜甜圈
        donut: 'donut'
    },
    //添加组时可选定的类型
    GroupShapeType:{
        rect:'rect',//矩形
        circle: 'circle',//圆
        fan: 'fan',//扇形
        ellipse: 'ellipse',//椭圆
        marker: 'marker',//标记
        image: 'image',//图片
        polygon: 'polygon',//多边形
        path:'path',//路径
        text: 'text',//文本
    },
    //内嵌的shape的类型（按功能区分）
    ShapeType:{
        connector: 0,
        scale: 1
    },
    //自定义节点类型
    NodeCustomType: {},
    AnimEdge: ["polyline0", "polyline1", "polyline2", "polyline3"],
    AnchorColor: '#6ab7ff'
}
export default Config;
