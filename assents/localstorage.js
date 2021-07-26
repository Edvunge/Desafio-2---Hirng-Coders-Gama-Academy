window.onload = function(){
    var btsubmit = document.getElementById("btsubmit");
    var btler = document.getElementById("btler");
    var btapagar = document.getElementById("btapagar");


    btsubmit.onclick = buttonsnome;
    btsubmit.onclick = submitsobrenome;
    btsubmit.onclick = submitemail;
    btsubmit.onclick = submitdtnasc;
    btsubmit.onclick = submitfilhos;
    btsubmit.onclick = submitAdvogado;
    btsubmit.onclick = submitPROGRAMADOR;
    btsubmit.onclick = submitMedico;
    btsubmit.onclick = submitsobre;
    btler.onclick = lerNome;
    btapagar.onclick = apagarNome;
}


function salvarNome(){
    var inputNome = document.getElementById("nome");
    var nome = inputNome.nodeValue;


    localStorage.setItem("nomeSalvo",nome);
}