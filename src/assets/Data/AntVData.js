import {Arrow} from "@antv/g6";
import config from "@/assets/Data/Config";

const data = {
    // 点集
    nodes: [
        // {
        //     x: 100,
        //     y: 300,
        //     type:'image',
        //     img: 'images.jpg',
        // },


        {
            id: 'l0_t0_oliBox_t0', // 节点的唯一标识
            x: 150, // 节点横坐标
            y: 100, // 节点纵坐标
            // label: '起始点', // 节点文本
            size: [30, 10],
            anchorPoints: config.anchorPoints,
            type: 'rect',
            // color: 'red',
            labelCfg: {
                style: {
                    fill: 'red',
                    fontSize: 12
                }
            },
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 1.2,
            },
        },
        {
            id: 'l0_t0_oliBox', // 节点的唯一标识
            x: 120, // 节点横坐标
            y: 185, // 节点纵坐标
            label: '油箱', // 节点文本
            size: [120, 160],
            anchorPoints: config.anchorPoints,
            labelCfg: {
                style: {
                    fontSize: 22,
                }
            },
            type: 'rect',
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 1,
            },
        },
        {
            id: 'l0_t0_oliBox_t1', // 节点的唯一标识
            x: 120, // 节点横坐标
            y: 110, // 节点纵坐标
            // label: '起始点', // 节点文本
            anchorPoints: config.anchorPoints,
            size: [120, 10],
            type: 'rect',
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 1.2,
            },
        },
        {
            id: 'l0_t0_oliBox_t2', // 节点的唯一标识
            x: 120, // 节点横坐标
            y: 120, // 节点纵坐标
            // label: '起始点', // 节点文本
            anchorPoints: config.anchorPoints,
            size: [120, 10],
            type: 'rect',
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 1,
            },
        },
        {
            id: 'l0_t0_oliBox_t3', // 节点的唯一标识
            x: 120, // 节点横坐标
            y: 130, // 节点纵坐标
            // label: '起始点', // 节点文本
            anchorPoints: config.anchorPoints,
            size: [120, 10],
            type: 'rect',
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 1,
            },
        },
        {
            id: 'l0_t0_oliBox_t4', // 节点的唯一标识
            x: 120, // 节点横坐标
            y: 225, // 节点纵坐标
            // label: '起始点', // 节点文本
            anchorPoints: config.anchorPoints,
            size: [120, 10],
            type: 'rect',
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 1,
            },
        },
        {
            id: 'l0_t0_oliBox_t5', // 节点的唯一标识
            x: 120, // 节点横坐标
            y: 245, // 节点纵坐标
            // label: '起始点', // 节点文本
            anchorPoints: config.anchorPoints,
            size: [120, 10],
            type: 'rect',
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 1,
            },
        },
        {
            "id": "l0_t0_oliBox_in_t0",
            "x": 144,
            "y": 122,
            anchorPoints: config.anchorPoints,
            "size": [
                1,
                15
            ],
            "type": "rect",
            "style": {
                "stroke": "black",
                "lineWidth": 0.6
            }
        },
        {
            "id": "l0_t0_oliBox_in_t1",
            "x": 144,
            "y": 142,
            anchorPoints: config.anchorPoints,
            "size": [
                8,
                25
            ],
            "type": "rect",
            "style": {
                "stroke": "black",
                "lineWidth": 1
            }
        },
        {
            "id": "l0_t0_oliBox_in_t2",
            "x": 144,
            "y": 160,
            anchorPoints: config.anchorPoints,
            "size": [
                1,
                10
            ],
            "type": "rect",
            "style": {
                "stroke": "black",
                "lineWidth": 0.6
            }
        },
        {
            "id": "l0_t0_oliBox_in_t3",
            "x": 144,
            "y": 178,
            anchorPoints: config.anchorPoints,
            "size": [
                8,
                25
            ],
            "type": "rect",
            "style": {
                "stroke": "black",
                "lineWidth": 1
            }
        },
        {
            id: 'l0_t0_oliBox_in_t4', // 节点的唯一标识
            x: 90, // 节点横坐标
            y: 230, // 节点纵坐标
            anchorPoints: config.anchorPoints,
            // label: '起始点', // 节点文本
            size: 30,
            type: 'image',
            img: 'sieve.png',
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 5,
            },
        },
        {
            id: '油冷器0', // 节点的唯一标识
            x: 390, // 节点横坐标
            y: 163, // 节点纵坐标
            label: '油冷器', // 节点文本
            size: [40, 30],
            anchorPoints: config.anchorPoints,
            type: 'rect',
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 1,
            },
        },
        {
            id: '油冷器1', // 节点的唯一标识
            x: 485, // 节点横坐标
            y: 163, // 节点纵坐标
            label: '油冷器', // 节点文本
            size: [40, 30],
            anchorPoints: config.anchorPoints,
            type: 'rect',
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 1,
            },
        },
        {
            id: '阀门0', // 节点的唯一标识
            x: 345, // 节点横坐标
            y: 195, // 节点纵坐标
            // label: '阀门', // 节点文本
            img: 'valve.png',
            size: [10, 25],
            anchorPoints: config.anchorPoints,
            type: 'image',
            style: {
                // backgroundColor: 'red',
                // fill:'red',
                stroke: 'black',
                lineWidth: 1,
            },
        },
    ],
    // 边集
    edges: [
        // 表示一条从 node1 节点连接到 node2 节点的边
        /*        {
                    source: 'l0_t0_oliBox_t0', // 起始点 id
                    target: 'node2', // 目标点 id
                    type: 'polyline',
                    label: '我是连线', // 边的文本
                    style:{
                        stroke: 'black',
                        lineWidth: 1,
                        // startArrow: {
                        //     path: Arrow.vee(8, 11, 0),
                        //     fill:'black'
                        // },
                        endArrow: {
                            path: Arrow.vee(8, 11, 0),
                            fill:'black'
                            // d: 25,
                        }
                    }
                },*/
        {
            source: '油冷器0', // 起始点 id
            target: 'l0_t0_oliBox_t3', // 目标点 id
            type: 'polyline0',
            sourceAnchor: config.anchorDirect.topMiddle,
            // label: '我是连线', // 边的文本
            style: {
                radius: 2,
                stroke: 'black',
                lineWidth: 1,
                lineAppendWidth: 10,
                endArrow: {
                    path: Arrow.vee(8, 11, 0),
                    fill: 'black'
                    // d: 25,
                }
            }
        }, {
            source: '油冷器0', // 起始点 id
            target: '阀门0', // 目标点 id
            type: 'polyline1',
            sourceAnchor: config.anchorDirect.leftMiddle,
            targetAnchor: config.anchorDirect.topMiddle,
            // label: '我是连线', // 边的文本
            style: {
                radius: 2,
                lineAppendWidth: 10,
                stroke: 'black',
                lineWidth: 1,
            }
        },
        {
            source: '油冷器1', // 起始点 id
            target: 'l0_t0_oliBox_t2', // 目标点 id
            type: 'polyline2',
            sourceAnchor: config.anchorDirect.topMiddle,
            // label: '我是连线', // 边的文本
            style: {
                radius: 2,
                stroke: 'black',
                lineWidth: 1,
                lineAppendWidth: 10,
                // endArrow: {
                //     path: Arrow.vee(8, 11, 0),
                //     fill:'black'
                //     // d: 25,
                // }
            }
        },
        {
            source: '油冷器1', // 起始点 id
            target: '阀门0', // 目标点 id
            type: 'polyline3',
            sourceAnchor: config.anchorDirect.bottomMiddle,
            targetAnchor: config.anchorDirect.rightMiddle,
            // label: '我是连线', // 边的文本
            style: {
                radius: 2,
                stroke: 'black',
                lineAppendWidth: 10,
                lineWidth: 1,
                endArrow: {
                    path: Arrow.vee(8, 11, 0),
                    fill: 'black',
                    // d: 8,
                }
            }
        },
    ],
};
export default data;
