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
function pesoIdeal() {
    let altura = parseFloat(prompt("Digite sua altura: (Ex.: 1.80"));
    let genero = prompt("Digite seu Gênero: (Ex.: M ou F)").toUpperCase();
    let pesoIdeal;

    switch (genero) {
        case "M":
            pesoIdeal = (72.7 * altura) - 58;
            break;
        case "F":
            pesoIdeal = (62.1 * altura) - 44.7;
            break;
        default:
            alert("Gênero inmformado é inválido!");
            return;

    }
    alert(`O peso ideal é ${pesoIdeal.toFixed(2)} kg.`)


}
function descobrirImc() {
    let peso = parseFloat(prompt("Digite seu peso: (Ex.: 75.2)"));
    let altura = parseFloat(prompt("Digite sua altura: (Ex.: 1.75)"));
    const imc = peso / (altura **2);
    let condicao;

    switch (true) {
        case imc < 18.5:
            condicao = "abaixo do peso";
            break;
        case imc >= 18.5 && imc < 25:
        condicao = "Peso normal";
        break;
        case imc >= 25 && imc < 30:
            condicao = "Acima do peso";
            break;
        case imc >= 30:
            condicao = "Obeso";
            break;
    } default:
    alert("Impossível calcular o IMC com os dados definidos!");
    alert(`
        IMC: ${imc.toFixed(2)}
        condicao: ${condicao}
        `)
}
