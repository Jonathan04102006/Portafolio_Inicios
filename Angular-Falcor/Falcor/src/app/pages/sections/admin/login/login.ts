import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// Declaración global para la librería de Google
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
export class Login implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  
  // Tu ID de cliente verificado
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
    this.initializeGoogleConfig();
  }

  ngAfterViewInit(): void {
    // Intentamos renderizar el botón después de que el HTML esté listo
    this.renderGoogleButton();
  }

  private initializeGoogleConfig() {
    if (typeof google !== 'undefined') {
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: (response: any) => this.handleGoogleLogin(response),
        use_fedcm: true,
        ux_mode: 'popup'
      });
    }
  }

  private renderGoogleButton() {
  const btnElement = document.getElementById('googleBtn');
  if (btnElement && typeof google !== 'undefined') {
    // Forzamos el ancho para que coincida con el formulario
    const totalWidth = btnElement.offsetWidth;

    google.accounts.id.renderButton(btnElement, {
      theme: 'outline',
      size: 'large',
      width: totalWidth,
      text: 'signin_with',
      shape: 'rectangular',
      logo_alignment: 'left'
    });
  }
}

  handleGoogleLogin(response: any) {
    if (response.credential) {
      console.log("¡Login exitoso!");
      this.router.navigate(['/home']);
    }
  }

  // --- MÉTODOS DE VALIDACIÓN ---

  getUsuarioError(): string {
    const control = this.loginForm.get('usuario');
    if (control?.touched && control.errors) {
      if (control.errors['required']) return 'El usuario es obligatorio.';
      if (control.errors['minlength']) return 'Debe tener al menos 6 caracteres.';
      if (control.errors['pattern']) return 'Solo letras, números y puntos.';
    }
    return '';
  }

  getPasswordError(): string {
    const control = this.loginForm.get('password');
    if (control?.touched && control.errors) {
      if (control.errors['required']) return 'La contraseña es obligatoria.';
      if (control.errors['minlength']) return 'Debe tener al menos 8 caracteres.';
      if (control.errors['pattern']) return 'Formato inválido (A, a, 1, @).';
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