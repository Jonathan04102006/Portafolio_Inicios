import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/Login/login-page-component';

export const routes: Routes = [

    {
        path: '',
        component: LoginPageComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];
