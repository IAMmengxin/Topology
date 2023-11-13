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
    * */
    constructor(stroke = 'black', fill = null, active = null,
                selected = null, highlight = null, inactive = null,
                disable = null,shadowColor = null,shadowBlur = 0) {
        this.stroke = stroke;
        this.fill = fill;
        this.active = active;
        this.selected = selected;
        this.highlight = highlight;
        this.inactive = inactive;
        this.disable = disable;
        this.shadowColor = shadowColor;
        this.shadowBlur = shadowBlur;
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
            "anchorPoints": [
            ],
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
