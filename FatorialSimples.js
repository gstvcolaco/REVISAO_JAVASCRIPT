function calcularFatorial(N) {
    if (N === 0 || N === 1) {
        return 1;
    } else {
        return N * calcularFatorial(N - 1);
    }
}

function main() {
    var N = parseInt(prompt("Digite um número inteiro (0 < N < 13):"));

    if (N > 0 && N < 13) {
        var fatorial = calcularFatorial(N);
        console.log("O fatorial de " + N + " é: " + fatorial);
    } else {
        console.log("Número inválido. O valor de N deve ser maior que 0 e menor que 13.");
    }
}

main();
