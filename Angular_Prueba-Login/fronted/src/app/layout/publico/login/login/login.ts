import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  
  public myForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

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
      return;
    }

    /* alert("Se va a enviar el formulario"); */
    console.log(this.myForm.value);
  }

  public get f():any{
    return this.myForm.controls;
  }
}