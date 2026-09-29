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
    let genero = String(prompt("Qual seu gênero? M ou F")). toUpperCase();
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