import {CursorType} from "../../data/Config";

export default class BaseStyleConstruct {
    //填充颜色,type:rgba or string(#ffffff)
    public fill:string;
    //描边颜色,type:rgba or string(#ffffff)
    public stroke:string;
    //激活时的样式,type:BaseStyleConstruct
    public active:BaseStyleConstruct;
    //选中时的样式,type:BaseStyleConstruct
    public selected:BaseStyleConstruct;
    //高亮时的样式,type:BaseStyleConstruct
    public highlight:BaseStyleConstruct;
    //进入激活状态时的样式,type:BaseStyleConstruct
    public inactive:BaseStyleConstruct;
    //disable状态时的样式,type:BaseStyleConstruct
    public disable:BaseStyleConstruct;
    //阴影颜色,type:rgba or string(#ffffff)
    public shadowColor:string;
    //阴影模糊程度,type:number
    public shadowBlur:number;
    //描边虚线
    public lineDash:Array<Number>;
    //设置绘图的当前 alpha 或透明值
    public opacity:number;
    //设置填充的 alpha 或透明值
    public fillOpacity:number;
    //鼠标在该节点上时的鼠标样式，CSS 的 cursor 选项都支持
    public cursor:CursorType;

    /*
    * @param {string} stroke 描边颜色,type:rgba or string(#ffffff)
    * @param {string} fill 填充颜色,type:rgba or string(#ffffff)
    * @param {BaseStyleConstruct} active 激活时的样式,type:BaseStyleConstruct
    * @param {BaseStyleConstruct} selected 选中时的样式,type:BaseStyleConstruct
    * @param {BaseStyleConstruct} highlight 高亮时的样式,type:BaseStyleConstruct
    * @param {BaseStyleConstruct} inactive 进入激活状态时的样式,type:BaseStyleConstruct
    * @param {BaseStyleConstruct} disable disable状态时的样式,type:BaseStyleConstruct
    * @param {string} shadowColor 阴影颜色,type:rgba or string(#ffffff)
    * @param {number} shadowBlur 阴影模糊程度,type:number
    * @param {number} lineDash Number[]类型代表实、虚长度,type:number[]
    * @param {number} opacity 设置绘图的当前 alpha 或透明值,type:number
    * @param {number} fillOpacity 设置填充的 alpha 或透明值,type:number
    * @param {string} cursor 鼠标在该节点上时的鼠标样式，CSS 的 cursor 选项都支持,type:string
    * */
    constructor(stroke:string = 'black', fill:string = 'rgba(0,0,0,0)', active:BaseStyleConstruct = null,
                selected:BaseStyleConstruct = null, highlight:BaseStyleConstruct = null,
                inactive:BaseStyleConstruct = null, disable:BaseStyleConstruct = null,
                shadowColor:string = null, shadowBlur:number = 0,
                lineDash:number[] = null,opacity:number = 1,fillOpacity:number = 1,
                cursor:CursorType = CursorType.default) {
        this.stroke = stroke;
        this.fill = fill;
        this.active = active;
        this.selected = selected;
        this.highlight = highlight;
        this.inactive = inactive;
        this.disable = disable;
        this.shadowColor = shadowColor;
        this.shadowBlur = shadowBlur;
        this.lineDash = lineDash;
        this.opacity = 1;
        this.fillOpacity = 1;
        this.cursor = cursor;
    }

    ss() {
        let s = {
            "id": "油冷器0",
            "x": 390,
            "y": 163,
            "label": "油冷器",
            "size": [
                40,
                30
            ],
            "anchorPoints": [],
            "type": "rect",
            "style": {
                "active": {
                    "fill": "rgb(247, 250, 255)",
                    "stroke": "rgb(95, 149, 255)",
                    "lineWidth": 2,
                    "shadowColor": "rgb(95, 149, 255)",
                    "shadowBlur": 10
                },
                "selected": {
                    "fill": "rgb(255, 255, 255)",
                    "stroke": "rgb(95, 149, 255)",
                    "lineWidth": 4,
                    "shadowColor": "rgb(95, 149, 255)",
                    "shadowBlur": 10,
                    "text-shape": {
                        "fontWeight": 500
                    }
                },
                "highlight": {
                    "fill": "rgb(223, 234, 255)",
                    "stroke": "#4572d9",
                    "lineWidth": 2,
                    "text-shape": {
                        "fontWeight": 500
                    }
                },
                "inactive": {
                    "fill": "rgb(247, 250, 255)",
                    "stroke": "rgb(191, 213, 255)",
                    "lineWidth": 1
                },
                "disable": {
                    "fill": "rgb(250, 250, 250)",
                    "stroke": "rgb(224, 224, 224)",
                    "lineWidth": 1
                },
                "stroke": "black",
                "lineWidth": 1,
                fill: '',
                shadowColor: '',
                shadowBlur: 0,
            }
        };
    }
}
