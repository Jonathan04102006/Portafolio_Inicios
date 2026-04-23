import { Routes } from '@angular/router';
import { Body } from './shared/body/body';
import { Dashboard } from './pages/dashboard/dashboard';
import { Register } from './pages/register/register';

export const routes: Routes = [ 
    {
        path: '',
        component: Body,
    },
    {
        path: 'dashboard',
        component: Dashboard,
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
