import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// Declaración para que TypeScript reconozca la librería de Google
declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  loginForm: FormGroup;
  private clientId = '863566525491-09aud05dghk6n1182vfm7u6phcca66fe.apps.googleusercontent.com';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[a-zA-Z0-9.]*$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)
      ]]
    });
  }

  ngOnInit(): void {
    // Inicializamos Google cuando el componente carga
    if (typeof google !== 'undefined') {
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: (response: any) => this.handleGoogleLogin(response)
      });
    }
  }

  // --- MÉTODOS DE GOOGLE ---
  
  loginWithGoogle() {
    google.accounts.id.prompt();
  }

  handleGoogleLogin(response: any) {
    if (response.credential) {
      console.log("Login exitoso con Google. Token:", response.credential);
      this.router.navigate(['/home']);
    }
  }

  // --- VALIDACIONES DE FORMULARIO ---

  getUsuarioError(): string {
    const control = this.loginForm.get('usuario');
    if (control?.touched && control.errors) {
      if (control.errors['required']) return 'El usuario es obligatorio.';
      if (control.errors['minlength']) return 'Debe tener al menos 6 caracteres.';
      if (control.errors['pattern']) return 'Solo letras, números y puntos permitidos.';
    }
    return '';
  }

  getPasswordError(): string {
    const control = this.loginForm.get('password');
    if (control?.touched && control.errors) {
      if (control.errors['required']) return 'La contraseña es obligatoria.';
      if (control.errors['minlength']) return 'Debe tener al menos 8 caracteres.';
      if (control.errors['pattern']) {
        return 'Debe incluir mayúscula, minúscula, número y un carácter especial (!@#$%^&*).';
      }
    }
    return '';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/home']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

/* 863566525491-09aud05dghk6n1182vfm7u6phcca66fe.apps.googleusercontent.com */