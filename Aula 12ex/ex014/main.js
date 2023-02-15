function carregar() {
    var hora = new Date().getHours()
    var exibHora = document.querySelector('h2#hora')
    var mudarimage = document.querySelector('div.image')
    var mudarfundo = document.body
    exibHora.innerText = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        // Bom dia
        mudarfundo.style.backgroundColor = 'royalblue'
        mudarimage.style.backgroundImage = 'url(images/manhã.jpg)'
    } else if (hora >= 12 && hora <= 17) {
        // Boa tarde
        mudarfundo.style.backgroundColor = 'burlywood'
        mudarimage.style.backgroundImage = 'url(images/tarde.jpg)'
    } else {
        // Boa Noite
        mudarfundo.style.backgroundColor = 'gray'
        mudarimage.style.backgroundImage = 'url(images/noite.jpg)'
    }
}