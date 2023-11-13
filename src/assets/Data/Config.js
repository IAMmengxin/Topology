const config = {
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
        topMiddle: 2,   //上侧中间
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
    //自定义节点类型
    NodeCustomType: {},
    AnimEdge: ["polyline0", "polyline1", "polyline2", "polyline3"],
}
export default config;
