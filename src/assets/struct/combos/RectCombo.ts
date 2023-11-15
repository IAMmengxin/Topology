let Instance:RectCombo = null;
export default class RectCombo{
    constructor() {
    }
    static get Instance(){
        if(Instance!==null){
            Instance = new RectCombo();
        }
        return Instance;
    }
}
