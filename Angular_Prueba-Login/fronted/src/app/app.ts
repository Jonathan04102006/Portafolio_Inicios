import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importa tus componentes y servicios
import { Login } from './layout/publico/login/login/login';
import { Principal } from './layout/privado/principal/principal';
import { AutentifactionService } from './shared/servicios/autentifaction';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Login,
    Principal
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'login';

  constructor(private loginPrd: AutentifactionService) {}

  // Esta es la función que controla la visibilidad en el HTML
  public visualizarMenu(): boolean {
    return this.loginPrd.ingresarAplicativo({});
  }
}