function flipV(imageLab) {
    let meio = imageLab.image1.width / 2
    let w = imageLab.image1.width
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= meio; x++) {
            // processamento de cada pixel da imagem
            let pixel1 = imageLab.image1.getPixel(x,y)
            let pixel2 = imageLab.image1.getPixel(w-x+1,y)
            imageLab.image2.setPixel(w-x+1,y,pixel1)
            imageLab.image2.setPixel(x,y,pixel2)
        }
    }
    imageLab.image2.refresh()
}

export default flipV