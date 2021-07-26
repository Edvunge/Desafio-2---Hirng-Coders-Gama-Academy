window.onload = function(){
    var btsalvar = document.getElementById("btsalvar");
    var btler = document.getElementById("btler");
    var btapagar = document.getElementById("btapagar");


    btsalvar.onclick = salvarNome;
    btler.onclick = lerNome;
    btapagar.onclick = apagarNome;
}


function salvarNome(){
    var inputNome = document.getElementById("nome");
    var nome = inputNome.nodeValue;


    localStorage.setItem("nomeSalvo",nome);
}