function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOM DIA 
    img.src = 'https://images.pexels.com/photos/5392635/pexels-photo-5392635.jpeg'
    document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'https://images.pexels.com/photos/8295269/pexels-photo-8295269.jpeg'
        document.body.style.background = '#b9846f'
    } else{
        //BOA NOITE
        img.src = 'https://i.redd.it/i-made-a-custom-hawaii-part-ii-cover-backround-without-the-v0-f70xwir84qcf1.png?width=1280&format=png&auto=webp&s=771cc3749f712306835d1190ad47f0d2c62890c2'
        document.body.style.background = '#1e1e1f'
    }
}