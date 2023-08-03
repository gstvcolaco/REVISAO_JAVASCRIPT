function calcularMediasPonderadas(valores) {
    var pesos = [2, 3, 5];
    var somaPesos = 0;
    var somaValores = 0;
  
    for (var i = 0; i < valores.length; i++) {
      somaPesos += pesos[i];
      somaValores += valores[i] * pesos[i];
    }
  
    return somaValores / somaPesos;
  }
  
  function calcularMediasPonderadas(casosTeste) {
    var mediasPonderadas = [];
  
    for (var caso of casosTeste) {
      var media = calcularMediaPonderada(caso);
      mediasPonderadas.push(media.toFixed(1));
    }
  
    return mediasPonderadas;
  }
  
  function main() {
    var entrada = prompt("Digite a quantidade de casos de teste e os valores (separados por espaço):");
    var linhas = entrada.trim().split("\n");
    var numCasosTeste = parseInt(linhas[0]);
  
    var casosTeste = [];
    for (var i = 1; i <= numCasosTeste; i++) {
      var valores = linhas[i].split("\n").map(Number);
      casosTeste.push(valores);
    }
  
    var mediasPonderadas = calcularMediasPonderadas(casosTeste);
    console.log(mediasPonderadas.join("\n"));
  }
  
  main();
  