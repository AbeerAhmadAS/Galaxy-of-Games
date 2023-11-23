import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designer } from '../model/Designer';
import { Game } from '../model/game';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

  private readonly API_URL = 'http://localhost:8080/api';  

  constructor(private http: HttpClient) {}

  getAllDesigner(): Observable<Designer[]> {
    // const options = {
    //   headers: this.getAuthHeader(),
    // };
    return this.http.get<Designer[]>(`${this.API_URL}/designer`);
  }
  getAllGame(): Observable<Game[]> {
    // const options = {
    //   headers: this.getAuthHeader(),
    // };
    return this.http.get<Game[]>(`${this.API_URL}/games`);
  }
  getAllplayer(): Observable<Player[]> {
    // const options = {
    //   headers: this.getAuthHeader(),
    // };
    return this.http.get<Player[]>(`${this.API_URL}/player`);
  }
  
  getDesignerItem(designerID: number): Observable<Designer> {
    // const options = {
    //   headers: this.getAuthHeader(),
    // };
    return this.http.get<Designer>(`${this.API_URL}/designer/id/${designerID}`);
  }
  getGameItem(gameID: number): Observable<Game> {
    // const options = {
    //   headers: this.getAuthHeader(),
    // };
    return this.http.get<Game>(`${this.API_URL}/games/id/${gameID}`);
  }
  getPlayerItem(playerID: number): Observable<Player> {
    // const options = {
    //   headers: this.getAuthHeader(),
    // };
    return this.http.get<Player>(`${this.API_URL}/player/id/${playerID}`);
  }
  getAllplayerUsername(playerUsername : String): Observable<Player[]> {
    
    return this.http.get<Player[]>(`${this.API_URL}/player/playerUsername/${playerUsername}`,);
  }

  getDesigneByDesignerUsernamer(designerUsername: String): Observable<Designer> {
    // const options = {
    //   headers: this.getAuthHeader(),
    // };
    return this.http.get<Designer>(`${this.API_URL}/designer/designerUsername/${designerUsername}`);
  }
  

  getAllDesigner1(): Observable<Designer[]> {
  
    return this.http.get<Designer[]>(`${this.API_URL}/designer`);
  }
   getGameByDesignerUsername(designerUsername: String): Observable<Game> {
    return this.http.get<Game>(`${this.API_URL}/games/designerUsername/${designerUsername}`);
  }
  getGameByPlayerUsername(playerUsername : String): Observable<Game> {
    return this.http.get<Game>(`${this.API_URL}/games/playerUsername/${playerUsername}`);
  }
  
  postdesigner(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/NewDesigner`, body);
  }
  postGame(designerID: number ,body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/${designerID}/NewGames`, body);
  }
  postPlayer(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/NewPlayer`, body);
  }
  patchGamePlayer(playerID: number, gameID: number): Observable<Game[]> {
    return this.http.patch<Game[]>(`${this.API_URL}/${playerID}/gamePlayer/${gameID}`, null);
  }
  putGame(gameID: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/UpdateGames/${gameID}`, body);
  }
  deleteGame(gameID: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/deleteGames/${gameID}`);
  }





  
}

