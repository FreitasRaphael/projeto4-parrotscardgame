let cont = 0;
let imagensEmbaralhadas = [];
let cartasEmbaralhadas = [];
let totalDeCartas = [];
let numeroDeCartas = 0; 

window.onload = () => {
    while(cont < 1) {
        numeroDeCartas = prompt("Com quantas cartas você quer jogar?");
        if (numeroDeCartas >= 4 && numeroDeCartas <= 14) {
            if (numeroDeCartas % 2 === 0) {
                cont += 1;
            }
        }
    }
}

const imagens = ["cartas/bobrossparrot.gif", "cartas/explodyparrot.gif", "cartas/fiestaparrot.gif", "cartas/metalparrot.gif", "cartas/revertitparrot.gif", "cartas/tripletparrot.gif", "cartas/unicornparrot.gif"];
const imagens2 = ["cartas/bobrossparrot.gif", "cartas/explodyparrot.gif", "cartas/fiestaparrot.gif", "cartas/metalparrot.gif", "cartas/revertitparrot.gif", "cartas/tripletparrot.gif", "cartas/unicornparrot.gif"];

for(let i = 0; i < parseInt(numeroDeCartas/2); i++) {
    cartasEmbaralhadas.push(imagens[i]);
    cartasEmbaralhadas.push(imagens2[i]);
    console.log(1);
}

console.log(cartasEmbaralhadas);

cartasEmbaralhadas = cartasEmbaralhadas.sort(() => Math.random() - 0.5);

//Colocar as cartas no jogo//

const cartasDoJogo = document.querySelector(".jogo");
for (let i = 0; i < numeroDeCartas; i++) {
    cartasDoJogo.innerHTML = cartasDoJogo.innerHTML + `
        <div class="carta" onclick="virarCarta(this)">
            <img src="front 1.svg" />
            <img src="${cartasEmbaralhadas[i]}" /> 
        </div>
    `
}

function virarCarta(el) {
    el.querySelector(".carta");

    
}

