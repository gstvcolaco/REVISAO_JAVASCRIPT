function determinarQuadrante(x, y) {
    if (x === 0 && y === 0) {
        return "Origem";
    } else if (x === 0) {
        return "Eixo Y";
    } else if (y === 0) {
        return "Eixo X";
    } else if (x > 0 && y > 0) {
        return "Quadrante 1";
    } else if (x < 0 && y > 0) {
        return "Quadrante 2";
    } else if (x < 0 && y < 0) {
        return "Quadrante 3";
    } else if (x > 0 && y < 0) {
        return "Quadrante 4";
    }
}

// Exemplo de uso:
const x = parseFloat(prompt("Digite a coordenada x:"));
const y = parseFloat(prompt("Digite a coordenada y:"));

const quadranteOuPosicao = determinarQuadrante(x, y);
console.log(quadranteOuPosicao);
