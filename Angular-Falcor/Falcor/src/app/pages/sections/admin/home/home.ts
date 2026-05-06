import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { 
  // Creamos un formulario simple con un solo campo
  formPrueba = new FormGroup({
    usuario: new FormControl('')
  });

  // Función que se activa en cada pulsación de tecla
  transformarMinusculas(event: any) {
    const valorOriginal = event.target.value;
    // Forzamos el valor a minúsculas internamente
    this.formPrueba.get('usuario')?.setValue(valorOriginal.toLowerCase(), { emitEvent: false });
  }
}