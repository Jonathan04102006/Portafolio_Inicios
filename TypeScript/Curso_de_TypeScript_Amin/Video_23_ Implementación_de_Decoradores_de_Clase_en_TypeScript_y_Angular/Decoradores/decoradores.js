var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function PersonaDec(target) {
    console.log(target);
    target.prototype.despedir = function (despedida) {
        return "".concat(despedida, ", ").concat(this.nombre);
    };
}
var Persona2 = /** @class */ (function () {
    function Persona2(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona2.prototype.saludar = function (saludo) {
        return "".concat(saludo, ", mi nombre es ").concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    Persona2 = __decorate([
        PersonaDec
    ], Persona2);
    return Persona2;
}());
var usuario = new Persona2("Jonathan", 19);
console.log(usuario.saludar("Hola"));
console.log(usuario.despedir("Adios"));
