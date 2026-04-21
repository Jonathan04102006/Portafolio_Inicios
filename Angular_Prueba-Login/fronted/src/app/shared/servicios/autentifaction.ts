import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutentifactionService {

  constructor() { }

  public ingresarAplicativo(obj:any):boolean{
    return obj.usuario == 'samv' && obj.password=='123';
  }
}
