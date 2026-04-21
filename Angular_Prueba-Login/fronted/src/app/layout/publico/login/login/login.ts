import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutentifactionService } from '../../../../shared/servicios/autentifaction';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  
  public myForm!:FormGroup;

  constructor(private fb:FormBuilder, private loginPrd:AutentifactionService) { }

  ngOnInit(): void {
    this.myForm = this.createMyform();
  }

  private createMyform():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',Validators.required]
    });
  }


  public submitFormulario(){
    /* console.log(this.myForm); */
    if (this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }

    /* alert("Se va a enviar el formulario"); */
    /* console.log(this.myForm.value); */
    if(!this.loginPrd.ingresarAplicativo(this.myForm.value)){
      alert("Usuario o contraseña invalido");
    }
  }

  public get f():any{
    return this.myForm.controls;
  }
}