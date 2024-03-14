import imageLab from "./imageLab.js"

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

document.getElementById('btn1').addEventListener('click', filtro);

function filtro() {
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
        }
    }
    imageLab.image2.refresh()
}

