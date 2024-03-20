function negativo(imageLab) {
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let media = (pixel.r+pixel.g+pixel.b)/3
            pixel.r = 255-media
            pixel.g = 255-media
            pixel.b = 255-media
            imageLab.image2.setPixel(x,y,pixel)
        }
    }
    imageLab.image2.refresh()
}

export default negativo