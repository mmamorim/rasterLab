function sepia(imageLab) {
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
export default sepia