function flipV(imageLab) {
    let meio = Math.round(imageLab.image1.height / 2)
    let h = imageLab.image1.height
    for(let y=1; y <= meio; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel1 = imageLab.image1.getPixel(x,y)
            let pixel2 = imageLab.image1.getPixel(x,h-y+1)
            imageLab.image2.setPixel(x,h-y+1,pixel1)
            imageLab.image2.setPixel(x,y,pixel2)
        }
    }
    imageLab.image2.refresh()
    console.log("altura",imageLab.image1.height);
}

export default flipV