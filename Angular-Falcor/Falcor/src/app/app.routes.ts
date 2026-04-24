import { Routes } from '@angular/router';
import { Home } from './pages/sections/admin/home/home';
import { Register } from './pages/sections/admin/register/register';
import { Login } from './pages/sections/admin/login/login';

export const routes: Routes = [ 
    {
        path: '',
        component: Login,
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