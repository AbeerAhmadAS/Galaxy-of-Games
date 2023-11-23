import { Designer } from "./Designer";
import { Player } from "./player";

export class Game{
    private _gameID: number;
    
    private _gameName: String;
   
    private _gameType: String;
    
    private _gamePrice: number;
    
    private _deviceGameRunningOn: String;
    
    private _gameImage: String;
    private _designBy: Designer;
    private _gameLink: String;
    public get gameLink(): String {
        return this._gameLink;
    }
    public set gameLink(value: String) {
        this._gameLink = value;
    }
    private _description: String;
    public get description(): String {
        return this._description;
    }
    public set description(value: String) {
        this._description = value;
    }
    private _playerBy: Player;
    public get playerBy(): Player {
        return this._playerBy;
    }
    public set playerBy(value: Player) {
        this._playerBy = value;
    }
    constructor(data : any){
        this._gameID = data.gameID;
        this._gameName=data.gameName;
        this._gameType=data.gameType;
        this._gamePrice=data.gamePrice;
        this._deviceGameRunningOn=data.deviceGameRunningOn;
        this._gameImage=data.gameImage;
        this._gameLink=data.gameLink,
        this._description=data.description
        this._playerBy=data.playerBy;
        this._designBy=data.designBy;
    }
    
    public get gameID(): number {
        return this._gameID;
    }
    public set gameID(value: number) {
        this._gameID = value;
    }
    public get gameName(): String {
        return this._gameName;
    }
    public set gameName(value: String) {
        this._gameName = value;
    }
    public get gameType(): String {
        return this._gameType;
    }
    public set gameType(value: String) {
        this._gameType = value;
    }
    public get gamePrice(): number {
        return this._gamePrice;
    }
    public set gamePrice(value: number) {
        this._gamePrice = value;
    }
    public get deviceGameRunningOn(): String {
        return this._deviceGameRunningOn;
    }
    public set deviceGameRunningOn(value: String) {
        this._deviceGameRunningOn = value;
    }
    public get gameImage(): String {
        return this._gameImage;
    }
    public set gameImage(value: String) {
        this._gameImage = value;
    }
    public get designBy(): Designer {
        return this._designBy;
    }
    public set designBy(value: Designer) {
        this._designBy = value;
    }
}
