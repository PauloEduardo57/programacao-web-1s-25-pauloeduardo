function transporMatriz(A) {
    const transposta = [];

    A[0].forEach((_, colIndex) => {
        const novaLinha = A.map(linha => linha[colIndex]);
        transposta.push(novaLinha);
    });

    console.log("Matriz Original:");
    console.table(A);

    console.log("Matriz Transposta:");
    console.table(transposta);

    return transposta;
}

// Exemplo de uso
const matrizExemplo = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matrizExemplo);
