import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'image',
        component: Image,
    },
    {
        path: '**',
        redirectTo: '',
    }
];
