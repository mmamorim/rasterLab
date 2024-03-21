function flipHV(imageLab) {
    let meioh = imageLab.image1.height / 2
    let meiow = imageLab.image1.width / 2
    let h = imageLab.image1.height
    let w = imageLab.image1.width
    for(let y=1; y <= h; y++) {
        for(let x=1; x <= w; x++) {
            // processamento de cada pixel da imagem
            let pixel1 = imageLab.image1.getPixel(x,y)
            let pixel2 = imageLab.image1.getPixel(w-x+1,h-y+1)
            imageLab.image2.setPixel(w-x+1,h-y+1,pixel1)
            imageLab.image2.setPixel(x,y,pixel2)
        }
    }
    imageLab.image2.refresh()
}

export default flipHV