import { Routes } from '@angular/router';
import { Body } from './shared/body/body';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';

export const routes: Routes = [ 
    {
        path: '',
        component: Body,
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'register',
        component: Register,
    },
    {
        path: '**',
        redirectTo: '',
    } 
];
