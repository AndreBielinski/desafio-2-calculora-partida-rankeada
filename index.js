let jogador = "André"
let saldoVitorias = saldoRankeada(150, 40)
let liga = rankeamento(saldoVitorias)

function saldoRankeada(vitoria, derrota) {
    let calculo = vitoria - derrota
    return calculo;
}
function rankeamento(saldoVitorias){
    let posicionamento = " "
    switch (true){
       
        case saldoVitorias <= 10:
            posicionamento = "Ferro"
            break

        case saldoVitorias > 10 && saldoVitorias <= 20:
            posicionamento = "Bronze"
            break
        
        case saldoVitorias > 20 && saldoVitorias <= 50:
            posicionamento = "Prata"
            break

        case saldoVitorias > 50 && saldoVitorias <= 80:
            posicionamento = "Ouro"
            break

        case saldoVitorias > 80 && saldoVitorias <= 90:
            posicionamento = "Diamante"
            break

        case saldoVitorias > 90 && saldoVitorias <= 100:
            posicionamento = "Lendário"
            break

        case saldoVitorias > 100:
            posicionamento = "Herói"
            break

    }
    return posicionamento
}

console.log(`O herói tem saldo de ${saldoVitorias}, está no nível ${liga}`);