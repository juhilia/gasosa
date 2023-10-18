function Calcular(){

    var valorEtanol = parseFloat (etanol.value);
    var valorGasolina = parseFloat (gasolina.value);

    var custo = (valorEtanol/valorGasolina);
    
    if (custo >0.7){
        alert("use Gasolina");
    }
  
    if (custo < 0.7){
        alert ("use Etanol");
    }

    if (custo == 0.7){
        alert ("tanto faz");
    }


    alert("");
}