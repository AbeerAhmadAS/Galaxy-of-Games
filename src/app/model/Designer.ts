import { Game } from "./game";

export class Designer {
    private _designerID: number;
    private _designerUsername : String;
    private _password : String;
    private _designerName: String;
    
    private _designerEmail: String;
    
    private _designerNationality: String;
    
    private _aboutYou: String;
    private _img: String;
    
    
    constructor(data :any) {
        this._designerID = data.designerID;
        this._designerUsername=data.designerUsername;
        this._password=data.password;
        this._designerName = data.designerName;
        this._designerEmail = data.designerEmail;
        this._designerNationality = data.designerNationality;
        this._aboutYou = data.aboutYou;
        this._img=data.img;
       
    }
   
    public get designerID(): number {
        return this._designerID;
    }
    public set designerID(value: number) {
        this._designerID = value;
    }
   
    public get designerUsername() {
        return this._designerUsername;
    }
    public set designerUsername(value) {
        this._designerUsername = value;
    }
    public get password() {
        return this._password;
    }
    public set password(value) {
        this._password = value;
    }
    public get designerName(): String {
        return this._designerName;
    }
    public set designerName(value: String) {
        this._designerName = value;
    }
    public get designerEmail(): String {
        return this._designerEmail;
    }
    public set designerEmail(value: String) {
        this._designerEmail = value;
    }
    public get designerNationality(): String {
        return this._designerNationality;
    }
    public set designerNationality(value: String) {
        this._designerNationality = value;
    }
    public get aboutYou(): String {
        return this._aboutYou;
    }
    public set aboutYou(value: String) {
        this._aboutYou = value;
    }
    public get img(): String {
        return this._img;
    }
    public set img(value: String) {
        this._img = value;
    }
   

    
}
