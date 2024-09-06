function flipHorizontal(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width/2; x++) {
            // processamento de cada pixel da imagem
            let pixel1 = imageLab.image1.getPixel(x,y)
            let pixel2 = imageLab.image1.getPixel(w-x+1,y)
            imageLab.image2.setPixel(x,y,pixel2)
            imageLab.image2.setPixel(w-x+1,y,pixel1)
        }
    }
    imageLab.image2.refresh()    
}

export default flipHorizontal