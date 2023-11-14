export default class BaseStyleConstruct {
    //填充颜色,type:rgba or string(#ffffff)
    fill;
    //描边颜色,type:rgba or string(#ffffff)
    stroke;
    //激活时的样式,type:BaseStyleConstruct
    active;
    //选中时的样式,type:BaseStyleConstruct
    selected;
    //高亮时的样式,type:BaseStyleConstruct
    highlight;
    //进入激活状态时的样式,type:BaseStyleConstruct
    inactive;
    //disable状态时的样式,type:BaseStyleConstruct
    disable;
    //阴影颜色,type:rgba or string(#ffffff)
    shadowColor;
    //阴影模糊程度,type:number
    shadowBlur;
    //描边虚线
    lineDash;
    //设置绘图的当前 alpha 或透明值
    opacity;
    //设置填充的 alpha 或透明值
    fillOpacity;
    //鼠标在该节点上时的鼠标样式，CSS 的 cursor 选项都支持
    cursor;

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
    constructor(stroke = 'black', fill = 'rgba(0,0,0,0)', active = null,
                selected = null, highlight = null, inactive = null,
                disable = null, shadowColor = null, shadowBlur = 0,
                lineDash = null,opacity = 1,fillOpacity = 1,
                cursor = 'default') {
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
