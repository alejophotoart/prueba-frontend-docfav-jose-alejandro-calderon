import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Game, GameInfo } from '../interfaces/game';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;
const proxyUrl = environment.proxyUrl;

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  query = `${proxyUrl}/${apiUrl}`;

  constructor( private http: HttpClient ) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${ this.query }/games`);
  }

  getGameInfo( gameId: any ): Observable<GameInfo> {
    return this.http.get<GameInfo>(`${ this.query }/game?id=${ gameId }`);
  }

  filterGames( genre: string, platform: string ): Observable<Game[]> {

    if ( genre == '' && platform != '' ) return this.http.get<Game[]>(`${ this.query }/games?platform=${ platform }`);
    
    if ( genre != '' && platform == '' ) return this.http.get<Game[]>(`${ this.query }/games?category=${ genre }`);
    
    if ( genre != '' && platform != '' ) return this.http.get<Game[]>(`${ this.query }/games?category=${ genre }&platform=${ platform }`);

    return this.getGames();
  }
}
