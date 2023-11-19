export default class Vector2{
    x:number;
    y:number;
    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }
    reduce(v2:Vector2):void{
        this.x -= v2.x;
        this.y -= v2.y;
    }
    static V2Reduce(v1:Vector2,v2:Vector2):Vector2{
        return new Vector2(v1.x-v2.x,v1.y-v2.y);
    }
    static get Zero():Vector2{
        return new Vector2(0,0)
    }
    //减去
    sub(v:Vector2){
        return new Vector2(this.x-v.x,this.y-v.y);
    }
    //加上
    add(v:Vector2){
        return new Vector2(this.x+v.x,this.y+v.y);
    }
}
