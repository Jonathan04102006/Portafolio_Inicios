import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Search } from './features/search/search';
import { Favorites } from './features/favorites/favorites';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'search',
        component: Search,
    },
    {
        path: 'favorites',
        component: Favorites,
    },
];
