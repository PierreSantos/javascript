function verificaridade() {

    var res = document.querySelector('div.saida')
    var foto = document.querySelector('div.foto')

    // Calcula a idade do individuo
    var anoAtual = new Date().getFullYear()
    var anoNasc = document.querySelector('input#ano').value
    var idade = anoAtual - anoNasc

    // Verifica qual o sexo do individuo
    var sexo = document.getElementsByName('sexo')
    var sexo = sexo[0].checked ? 'Homem' : 'Mulher'

    // Escreve o resultado na tela
    if (anoNasc <= 0 || anoNasc > anoAtual) {
        alert('ERRO: Verifique os dados e tente novamente!')
    } else {
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        if (sexo == 'Homem') {
            if (idade < 15) {
                // criança
                foto.style.backgroundImage = 'url(imagens/bebe-m.jpg)'      
            } else if (idade < 25) {
                // jovem
                foto.style.backgroundImage = 'url(imagens/jovem-m.jpg)'
            } else if (idade < 64) {
                // adulto
                foto.style.backgroundImage = 'url(imagens/adulto-m.jpg)'
            } else if (idade >= 65) {
                // idoso
                foto.style.backgroundImage = 'url(imagens/idoso-m.jpg)'
            }
        } else {
            if (idade < 15) {
                // criança
                foto.style.backgroundImage = 'url(imagens/bebe-f.jpg)'
            } else if (idade < 25) {
                // jovem
                foto.style.backgroundImage = 'url(imagens/jovem-f.jpg)'
            } else if (idade < 64) {
                // adulto
                foto.style.backgroundImage = 'url(imagens/adulto-f.jpg)'
            } else if (idade >= 65) {
                // idosa
                foto.style.backgroundImage = 'url(imagens/idoso-f.jpg)'
            }
        }
        foto.style.display = 'block'
    }
}