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
  styleUrls: ['./login.css']
})
export class Login implements OnInit, AfterViewInit {
  loginForm: FormGroup;

  // Credenciales de acceso únicas
  private readonly USER_DB = 'jona.123';
  private readonly PASS_DB = 'JonPlayFox503@';

  mostrarModal: boolean = false;
modalMensaje: string = '';
modalTipo: 'success' | 'error' = 'success';

  // Tu ID de cliente verificado
  private clientId = '863566525491-09aud05dghk6n1182vfm7u6phcca66fe.apps.googleusercontent.com';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[a-z0-9.]*$')
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
      if (control.errors['pattern']) return 'Solo letras minúsculas, números y puntos.';
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

  // SECCIÓN DE VALIDACIÓN DE CREDENCIALES
  onSubmit() {
    if (this.loginForm.valid) {
      const { usuario, password } = this.loginForm.value;
      
      if (usuario === this.USER_DB && password === this.PASS_DB) {
      // ÉXITO
        this.modalMensaje = 'Usuario y contraseña correcta';
        this.modalTipo = 'success';
        this.mostrarModal = true;
      } else {
      // ERROR
        this.modalMensaje = 'Usuario y contraseña incorrecta';
        this.modalTipo = 'error';
        this.mostrarModal = true;
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  cerrarModal() {
    if (this.modalTipo === 'success') {
      this.mostrarModal = false;
      this.router.navigate(['/home']);
    } else {
      // Esto funciona directo y limpia todo el login de Falcor
      window.location.reload(); 
    }
}
}

/* 863566525491-09aud05dghk6n1182vfm7u6phcca66fe.apps.googleusercontent.com */