import { Component, signal, inject, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../core/services/tmdb';
import { Movie } from '../../core/models/movie';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  private tmdbService = inject(TmdbService);

  movies = signal<Movie[]>([]);
  isLoading = signal<boolean>(true);

  constructor() {
    // Angular 21: Este bloque garantiza que la API de TMDb se llame 
    // únicamente en el navegador, evitando problemas de SSR.
    afterNextRender(() => {
      this.loadMovies();
    });
  }

  private loadMovies() {
    this.tmdbService.getPopularMovies().subscribe({
      next: (data: Movie[]) => {
        this.movies.set(data);
        this.isLoading.set(false);
      },
      error: (err: any) => {
        console.error('Error al cargar populares:', err);
        this.isLoading.set(false);
      }
    });
  }
}