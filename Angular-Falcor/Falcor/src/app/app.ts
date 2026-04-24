import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';   
import { Footer } from './shared/footer/footer';
import { Home } from './pages/sections/admin/home/home';
import { Body } from './shared/body/body';
import { Login } from './pages/sections/admin/login/login';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    Home,
    Body,
    Header,
    Footer,
    Login,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('Falcor');
}
