export default class Vector2{
    x;
    y;
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    reduce(v2){
        this.x -= v2.x;
        this.y -= v2.y;
    }
    static V2Reduce(v1,v2){
        return new Vector2(v1.x-v2.x,v1.y-v2.y);
    }
    static get Zero(){
        return new Vector2(0,0)
    }
}
