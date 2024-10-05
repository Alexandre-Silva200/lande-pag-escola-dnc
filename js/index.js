var leonardo = document.querySelector(".leonardo");
var bruna = document.querySelector(".bruna");
var samantna = document.querySelector(".samantna");
var setaDireita = document.querySelector("#seta-para-direita");
var setaEsqueda = document.querySelector(".esqueda");

function RolarParaDireita() {
    bruna.style ="display:none"
   samantna.style ="display:flex"
   setaEsqueda.style ="display:flex"
   setaDireita.style ="display:none"
   
}
function RolarParaesqueda() {
    bruna.style ="display:flex"
   samantna.style ="display:none"
   setaEsqueda.style ="display:none"
   setaDireita.style ="display:flex"
   
}
