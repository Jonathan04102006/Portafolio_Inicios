
/*
class User {
    constructor(name){
        this.name = name;
    }

    get name(){
        return "Hola " + this._name;
    }

    set name(value){
        if(value !== ""){
            this._name = value;
        }
    }
}

let user = new User("Kiko");
alert(user.name);
user.name = "Algo";
*/

class User {
    constructor(name){
        this.name = name;
    }

    ["say" + "Hello"](){
        alert("Hola " + this.name);
    }
}

let user = new User("Kiko");
user.sayHello();