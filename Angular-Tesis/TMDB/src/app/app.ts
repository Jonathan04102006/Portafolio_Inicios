import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { Favorites } from './features/favorites/favorites';
import { Search } from './features/search/search';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    Home,
    Search,
    Favorites,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TheMovieDB');
}
