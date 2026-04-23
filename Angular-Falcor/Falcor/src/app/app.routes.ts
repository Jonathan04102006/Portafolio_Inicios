import { Routes } from '@angular/router';
import { Body } from './shared/body/body';
import { Dashboard } from './pages/dashboard/dashboard';

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
        path: '**',
        redirectTo: '',
    } 
];
