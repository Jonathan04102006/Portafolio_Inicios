import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from './layout/publico/login/login/login';
import { Principal } from './layout/privado/principal/principal';
import { AutentifactionService } from './shared/servicios/autentifaction';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    Login,
    Principal,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fronted');
}
export class AppComponent {
  title = 'login';

  constructor(private loginPrd:AutentifactionService){}

  public visualizarMenu():boolean{
    return this.loginPrd.ingresarAplicativo({});
  }
}