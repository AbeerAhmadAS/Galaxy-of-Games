import { Game } from "./game";

export class Player{
    private _playerID: number;
   
    private _playerName: String;
   
    private _playerEmail: String;
   
    private _playerAge: String;
    
    private _aboutYou: string;
   private _playerUsername: String;
    
    private _password: String;
    private _img: string;
    public get img(): string {
        return this._img;
    }
    public set img(value: string) {
        this._img = value;
    }
   
    constructor(data : any){
        this._playerID=data.playerID;
        this._playerName=data.playerName;
        this._playerEmail=data.playerEmail;
        this._playerAge=data.playerAge;
        this._aboutYou=data.aboutYou;
        this._playerUsername =data.playerUsername;
        this._password = data.password;
        this._img=data.img

    }
    public get playerID(): number {
        return this._playerID;
    }
    public set playerID(value: number) {
        this._playerID = value;
    }
    public get playerName(): String {
        return this._playerName;
    }
    public set playerName(value: String) {
        this._playerName = value;
    }
    public get playerEmail(): String {
        return this._playerEmail;
    }
    public set playerEmail(value: String) {
        this._playerEmail = value;
    }
    public get playerAge(): String {
        return this._playerAge;
    }
    public set playerAge(value: String) {
        this._playerAge = value;
    }
    public get aboutYou(): string {
        return this._aboutYou;
    }
    public set aboutYou(value: string) {
        this._aboutYou = value;
    }
    public get playerUsername(): String {
        return this._playerUsername;
    }
    public set playerUsername(value: String) {
        this._playerUsername = value;
    }
    public get password(): String {
        return this._password;
    }
    public set password(value: String) {
        this._password = value;
    }
    
   
}