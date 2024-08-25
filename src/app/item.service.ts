import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ItemMovie {
  movieId: number,
  movie_title: string,
  movie_description: string,
  movie_image: string,
  movie_duration: string,
  movie_genre: string
}

export interface ItemSerie {
  serieId: number,
  serie_title: string,
  serie_description: string,
  serie_image: string,
  serie_genre: string,
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly URL = 'http://localhost:5282'
  constructor(private http: HttpClient){}

  getItemsMovies(): Observable<any>{
    return this.http.get(`${this.URL}/movies`)
  }

  getItemsSeries(): Observable<any>{
    return this.http.get(`${this.URL}/series`, {})
  }

  getItemsMoviesFav(userId:number): Observable<any>{
    const body ={
      "userId": userId
    }
    return this.http.post(`${this.URL}/moviesFav`, body)
  }

  getItemsSeriesFav(userId:number): Observable<any>{
    const body ={
      "userId": userId
    }
    return this.http.post(`${this.URL}/seriesFav`, body)
  }

  addMovieFavorites(movieId:number, userId:number): Observable<any>{
    const body = {
      "movieId": movieId,
      "userId": userId
    }
    return this.http.post(`${this.URL}/addFavMov`, body)
  }

  addSerieFavorites(serieId:number, userId:number): Observable<any>{
    const body = {
      "serieId" : serieId,
      "userId": userId
    }
    return this.http.post(`${this.URL}/addFavSer`, body)
  }

}
