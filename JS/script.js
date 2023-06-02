let linhas, colunas, bombas, matriz, tabela;

function gerarMatriz(l, c) {
    matriz = [];
    for (let i = 0; i < l; i++) {
        matriz[i] = new Array(c).fill(0);
    }
    console.log(matriz);
}

function gerarTabela(l, c) {
    gerarMatriz(l. c);
    let str = "";
    for (let i = 0; i < l; i++) {
        str += "<tr>";
        for (let j = 0; j < c; j++) {
            str += "<td class='blocked'></td>";
        }
        str += "</tr>";
    }
    tabela.innerHTML = str;
}

function mostrarMatriz() {
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            if (matriz[i][j] === -1) {
                tabela.rows[i].cells[j].innerHTML = "&#128163;";
            } else {
                tabela.rows[i].cells[j].innerHTML = matriz[i][j];
            }
        }
    }
}

function gerarBombas() {
    for (let i = 0; i < bombas;) {
        let linha = Math.floor((Math.random() * linhas));
        let coluna = Math.floor((Math.random() * colunas));
        if (matriz[linha][coluna] === 0) {
            matriz[linha][coluna] = -1;
            i++;
        }
    }
}

function gerarNumero(l, c) {
    let count = 0;
    for (let i = l - 1; i <= l + 1; i++) {
        for (let j = c - 1; j <=c + 1; j++) {
            if (i >= 0 && i < linhas && j >= 0 && j < colunas) {
                if (matriz[i][j] === -1) {
                    count++;
                }
            }
        }
    }
    matriz[l][c] = count;
}
function gerarNumeros() {
    
}