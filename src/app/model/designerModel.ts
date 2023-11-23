import { Game } from "./game";

export class DesignerIformation{
    private _designerName: String;
    
    private _designerEmail: String;
    
    private _designerNationality: String;
    
    private _aboutYou: String;
    private _img: String;
    
    constructor(data : any){
        this._designerName = data.designerName;
        this._designerEmail = data.designerEmail;
        this._designerNationality = data.designerNationality;
        this._aboutYou = data.aboutYou;
        this._img=data.img;
    }
    
}