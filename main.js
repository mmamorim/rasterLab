import imageLab from "./imageLab.js"

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

document.getElementById('btn1').addEventListener('click', brilho);
document.getElementById('btn2').addEventListener('click', tonsCinza);
document.getElementById('btn3').addEventListener('click', inverte);
document.getElementById('btn4').addEventListener('click', sepia);

function brilho() {
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let brilho = 2.5
            pixel.r = pixel.r * brilho
            pixel.g = pixel.g * brilho
            pixel.b = pixel.b * brilho
            imageLab.image2.setPixel(x,y,pixel)
        }
    }
    imageLab.image2.refresh()
}

function tonsCinza() {
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let media = (pixel.r+pixel.g+pixel.b)/3
            pixel.r = media
            pixel.g = media
            pixel.b = media
            imageLab.image2.setPixel(x,y,pixel)
        }
    }
    imageLab.image2.refresh()
}

function inverte() {
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let media = (pixel.r+pixel.g+pixel.b)/3
            media = 255-media
            pixel.r = media
            pixel.g = media
            pixel.b = media            
            imageLab.image2.setPixel(x,y,pixel)
        }
    }
    imageLab.image2.refresh()
}

function sepia() {
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let r = pixel.r
            let g = pixel.g
            let b = pixel.b
            pixel.r = 0.393*r + 0.769*g + 0.189*b
            pixel.g = 0.349*r + 0.686*g + 0.168*b
            pixel.b = 0.272*r + 0.534*g + 0.131*b            
            imageLab.image2.setPixel(x,y,pixel)
        }
    }
    imageLab.image2.refresh()
}
