import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  password: string = '';
  passwordError: string = '';

  validatePassword(): void {
    /**
     * Reglas:
     * - Mínimo 6 caracteres
     * - Al menos 1 mayúscula
     * - Al menos 1 minúscula
     * - Al menos 1 número
     * - Solo caracteres especiales permitidos: $ @ . *
     */

    if (!this.password) {
      this.passwordError = '';
      return;
    }

    // Primero validamos longitud mínima
    if (this.password.length < 6) {
      this.passwordError =
        'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    // Regex completa con mínimo 6 caracteres
    const passwordRegex =
      /^(?=.[A-Z])(?=.[a-z])(?=.\d)[A-Za-z\d$@.]{6,}$/;

    if (!passwordRegex.test(this.password)) {
      this.passwordError =
        'Formato no válido. Debe contener mayúscula, minúscula, número y solo estos caracteres especiales: $ @ . *';
    } else {
      this.passwordError = '';
    }
  }
}