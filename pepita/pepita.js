


class Golondrina {
    constructor() {
        this._energia = 0;
    }

    energia() {
        return this._energia;
    }

    comer(cosa, gramos) {
        this._energia += cosa.energiaPorGramo() * gramos;
    }

    volar(kms) {
        this._energia -= kms + 10;
    }
}

const alpiste = { energiaPorGramo: () => 4 }
const mondongo = { energiaPorGramo: () => 100 }



function darleComidaAPepita() {
    pepita.comer(alpiste, document.getElementById("cantAlp").value);
    const label = document.getElementById("energia");//se trae el id energia del html y cambia el valor q tiene por la energia actualizada
    label.innerText = pepita.energia();
}
function comerMondongo() {
    pepita.comer(mondongo, document.getElementById("cantMon").value);
    const label = document.getElementById("energia")
    label.innerText = pepita.energia();
}

function pepitaVolar() {
    pepita.volar(document.getElementById("volarKms").value)
    const label = document.getElementById("energia");
    label.innerText = pepita.energia();
}

function imagenPepita()

const pepita = new Golondrina();

module.exports = { Golondrina, alpiste, mondongo }