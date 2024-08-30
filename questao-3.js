const faturamento = [300, 400, 500, 600, 700, 0, 0, 800, 900, 1000, 1100, 0, 0, 0, 0, 1200, 1300, 0, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500];

let menorValor = faturamento[0];
let maiorValor = faturamento[0];
let soma = 0;
let diasComFaturamento = 0;

for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i] > 0) {
        if (faturamento[i] < menorValor) {
            menorValor = faturamento[i];
        }
        if (faturamento[i] > maiorValor) {
            maiorValor = faturamento[i];
        }
        soma += faturamento[i];
        diasComFaturamento++;
    }
}

let mediaMensal = soma / diasComFaturamento;

let diasAcimaMedia = 0;
for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i] > mediaMensal) {
        diasAcimaMedia++;
    }
}

console.log("Menor valor de faturamento: R$" + menorValor.toFixed(2));
console.log("Maior valor de faturamento: R$" + maiorValor.toFixed(2));
console.log("Número de dias acima da média: " + diasAcimaMedia);