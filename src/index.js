import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Main from './Main.js';

class Personajes extends Main {

    constructor(personaje1, personaje2) {
        super();
        this.personaje1 = personaje1;
        this.personaje2 = personaje2;
    }

    seleccionar_personaje() {
        let personaje = prompt("Elige un personaje: 1 o 2");
        if (personaje === "1") {
            console.log("Has elegido el personaje 1");
            return "personaje1";
        } else if (personaje === "2") {
            console.log("Has elegido el personaje 2");
            return "personaje2";
        }
    }

    realizar_ataque(personaje) {
        if (personaje === "personaje1") {
            let ataque = prompt("Elige un ataque: 1, 2 o 3");
            switch (ataque) {
                case "1":
                    this.personaje2 += this.Ataque1();
                    break;
                case "2":
                    this.personaje2 += this.Ataque2();
                    break;
                case "3":
                    this.personaje2 += this.Ataque3();
                    break;
                default:
                    alert("Ataque no valido");
                    break;
            }
        } else if (personaje === "personaje2") {
            let ataque = prompt("Elige un ataque: 1, 2 o 3");
            switch (ataque) {
                case "1":
                    this.personaje1 += this.Ataque1();
                    break;
                case "2":
                    this.personaje1 += this.Ataque2();
                    break;
                case "3":
                    this.personaje1 += this.Ataque3();
                    break;
                default:
                    alert("Ataque no valido");
                    break;
            }
        }
        if (this.personaje1 <= 0) {
            console.log("Personaje 1 ha muerto");
        }
        if (this.personaje2 <= 0) {
            console.log("Personaje 2 ha muerto");
        }
    }
}
let vida = new Personajes(100, 100);
let personaje_seleccionado;

while (vida.personaje1 > 0 && vida.personaje2 > 0) {
    personaje_seleccionado = vida.seleccionar_personaje();
    vida.realizar_ataque(personaje_seleccionado);
    console.log("-----");
    console.log("vida personaje 1: " + vida.personaje1);
    console.log("vida personaje 2: " + vida.personaje2);
}