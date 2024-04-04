function escala(imageLab) {
    let fatorW = 2.5
    let fatorH = 2.5
    let widthDest = Math.round(imageLab.image1.width * fatorW)
    let heightDest = Math.round(imageLab.image1.height * fatorH)
    for(let y=1; y <= heightDest; y++) {
        for(let x=1; x <= widthDest; x++) {
            // processamento de cada pixel da imagem
            let x1 = Math.round(x / fatorW)
            let y1 = Math.round(y / fatorH)
            let pixel = imageLab.image1.getPixel(x1,y1)
            imageLab.image2.setPixel(x,y,pixel)
        }
    }
    imageLab.image2.refresh()
}

export default escala