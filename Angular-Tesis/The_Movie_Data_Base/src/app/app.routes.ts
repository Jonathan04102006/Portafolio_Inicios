import { Routes } from '@angular/router';
import { Home } from './feactures/home/home';
import { Favorites } from './feactures/favorites/favorites';
import { Search } from './feactures/search/search';
import { MovieCard } from './shared/components/movie-card/movie-card';
import { Navbar } from './shared/components/navbar/navbar';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'favorites',
        component: Favorites
    },
    {
        path: 'search',
        component: Search
    },
    {
        path: 'movie-card',
        component: MovieCard
    },
    {
        path: 'navbar',
        component: Navbar
    }
];
