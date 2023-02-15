/*
    faixas etárias
    
    bebê/criança = até 15
    jovem = de 16 até 25
    adulto = de 26 até 64
    idoso = acima de 65
*/

function verificaridade() {

    //calcula a idade do individuo
    var anoAtual = new Date().getFullYear()
    var anoNasc = document.querySelector('input#ano').value
    var idade = anoAtual - anoNasc

    // Verifica qual o sexo do individuo
    var sexo = document.getElementsByName('sexo').value = 'm' ? 'Homem':'Mulher'
    document.querySelector('div.saida').innerHTML = `Detectamos ${sexo} com ${idade} anos.`
}

