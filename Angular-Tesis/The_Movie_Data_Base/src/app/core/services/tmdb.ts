import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Movie, TmdbResponse } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private http = inject(HttpClient);
  
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly lang = 'es-ES';

  // Tu clave corta real de la captura de TMDb (Esta sí funciona al 100%)
  private readonly apiKey = 'c3ac920a4c915cb4a994ef41d92ade33'; 

  // Construimos dinámicamente la URL limpia con tu credencial activa
  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<TmdbResponse>(
      `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=${this.lang}`
    ).pipe(
      map(response => response.results)
    );
  }

  searchMovies(query: string): Observable<Movie[]> {
    return this.http.get<TmdbResponse>(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}&language=${this.lang}`
    ).pipe(
      map(response => response.results)
    );
  }
}