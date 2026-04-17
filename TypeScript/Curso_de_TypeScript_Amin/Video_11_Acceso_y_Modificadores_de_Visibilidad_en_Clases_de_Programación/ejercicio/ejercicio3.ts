import { Vehiculo } from "./index";

export class Auto extends Vehiculo {

    constructor ( marca: string, modelo: string, numeroSerie: string ){
        super( marca, modelo, numeroSerie );
    }

    public activarCarro(): string{
        return `Mi ${this.marca} es modelo ${this.modelo}`;
    }
}

const carro = new Auto("Toyota", "Corola", "124");

console.log(carro.activarCarro());
