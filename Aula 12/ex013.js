var hora = new Date().getHours()

console.log(`Agora são exatamente ${hora} hora`)
if ( hora >= 6 && hora <= 11) {
    console.log('Bom dia')
} else if (hora > 11 && hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa Noite')
}