function somaMaior() {
    let a = Number(prompt("Digite um número: "));
    let b = Number(prompt("Digite um número: "));
    let c = Number(prompt("Digite um número: "));


if (soma < c) { 
    alert("A soma de A + B é: " + soma)
}
else {
    console.log("Fim!")}
}


function tempoCasamento() {
    let nome = String(prompt("Digite seu nome:")).toUpperCase();
    let genero = String(prompt("Qual seu gênero? M ou F")).toUpperCase();
    let estadoCivil = String(prompt("Qual seu estado civil? Solteiro(a) ou Casado(a)?")).toUpperCase();
    console.log(`
        ===========
        Nome: ${nome},
        Genero: ${genero},
        Estado Civil: ${estadoCivil}
        `);
        console.log(genero);
        console.log(estadoCivil);


    if (genero === 'F' && estadoCivil === 'CASADA'){
        let tempoCasada = Number(prompt("Quantos anos de cadasa?"));
        alert(`
            =======
            Nome: ${nome},
            Gênero: ${genero},
            Tempo de casada: ${tempoCasada}

            `);
    }

}

function imparPar(){
    let numero = Number(prompt("Digite um número:"));
    if (numero % 2 === 0) {
     alert("O número é par");
    } else {
        alert("O número é impar");
    }



}
function valoresIguais() {
    let a = parseInt(prompt("Digite um número:"));
    let b = parseInt(prompt("Digite outro número:"));

    if (a===b) {
        let c = a + b;
        alert("A soma de A + B é: " + c);
    } else {
        let c = a * b;
        alert("O produto de A * B é: " + c);
    }

}
 function valorPositivoNegativo() {
        let num = Number(prompt("Digite um número positivo ou negativo:"));
        if(num < 0) {
        let resultado = num * 3;
        alert("O triplo de " + num + " é: " + resultado);
    } else {
        let resultado = num * 2;
        alert("O dobro de " + num + "é: " + resultado);
        }
    }
function ordenarDecrescente() {
    let a = parseInt(prompt("Digite o valor de a:"));
    let b = parseInt(prompt("Digite o valor de b:"));
    let c = parseInt(prompt("Digite o valor de c:"));

    if (a > b && a > c) {
        if (b>c) {
            alert(`${a}, ${b}, ${c}`);
        } else{
            alert(`${a}, ${c}, ${b}`);
        }

     } else if (b > a && b > c) {
        if (c>a) {
            alert(`${b}, ${c}, ${a}`);
        } else {
            alert(`${b}, ${a}, ${c}`);
        }
     } else {
        if (b>a) {
            alert(`${c}, ${b}, ${a}`); 
        } else {
            alert(`${c}, ${a}, ${b}`);
        }
     }


}
