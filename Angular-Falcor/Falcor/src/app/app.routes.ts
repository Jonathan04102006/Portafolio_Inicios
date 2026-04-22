import { Routes } from '@angular/router';
import { Body } from './shared/body/body';

export const routes: Routes = [ 
    {
        path: '',
        component: Body,
    },
    {
        path: '**',
        redirectTo: '',
    } 
];
