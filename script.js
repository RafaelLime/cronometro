function disparar(){
    tempo = setInterval(function contar(){
        var cronometro = document.getElementById('segundos').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('segundos').innerHTML = soma;
    },1000)
}

function PararContagem(){
    clearInterval(tempo);
}
function resetar(){
    clearInterval(tempo);
    document.getElementById('segundos').innerHTML = 00
    document.getElementById('minutos').innerHTML = 00
    document.getElementById('horas').innerHTML = 00

}