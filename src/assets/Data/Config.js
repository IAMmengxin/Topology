const config = {
    AnchorPoints: [
        [0, 0.5],
        [0.5, 0],
        [1, 0.5],
        [0.5, 1]
    ],
    AnchorDirect: {
        leftMiddle: 0,
        topMiddle: 1,
        rightMiddle: 2,
        bottomMiddle: 3
    },
    LabelPosition:{
        center:'center',
        left:'left',
        right:'right',
        top: 'top',
        bottom:'bottom'
    },
    //内置节点类型
    NodeBuildInType:{
        circle:'circle',
        rect:'rect',
        ellipse:'ellipse',
        diamond: 'diamond',
        triangle: 'triangle',
        star: 'star',
        image: 'image',
        modelRect: 'modelRect',
        //甜甜圈
        donut: 'donut'
    },
    //自定义节点类型
    NodeCustomType:{
    },
    AnimEdge:["polyline0","polyline1","polyline2","polyline3"],
}
export default config;
