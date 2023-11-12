import { Arrow } from '@antv/g6';
export default class Edge{
    source;
    target;
    type;
    sourceAnchor;
    targetAnchor;
    style;
    constructor(source,target,type = 'polyline',sourceAnchor,targetAnchor,style) {
    }
}
class Style{
    radius;
    stroke;
    lineWidth;
    lineAppendWidth;
    endArrow;
    constructor() {
    }
}
class ArrowStruct{
    path;
    fill;
    constructor(path = Arrow.vee,fill = 'black') {
        this.path = path;
        this.fill = fill;
    }
}
