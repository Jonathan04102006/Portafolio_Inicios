import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './layout/publico/login/login/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    Login,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fronted');
}
export class AppComponent {}