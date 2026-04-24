import { Routes } from '@angular/router';
import { Body } from './shared/body/body';
import { Home } from './pages/sections/home/home';
import { Register } from './pages/sections/register/register';

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