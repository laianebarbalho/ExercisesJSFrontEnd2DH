

function normalizaTextoRetiraEspacos (textoRecebido) {
    // return textoRecebido.trim();
    return textoRecebido.split(" ").join("").trim();
}