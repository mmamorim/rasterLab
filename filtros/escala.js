function escala(imageLab) {
    let fator = 20
    let w = imageLab.image1.width * fator
    let h = imageLab.image1.height * fator
    for(let y=1; y <= h-1; y++) {
        for(let x=1; x <= w-1; x++) {
            // processamento de cada pixel da imagem
            let x1 = Math.floor(x / fator)
            let y1 = Math.floor(y / fator)
            let pixel = imageLab.image1.getPixel(x1,y1)
            imageLab.image2.setPixel(x,y,pixel)
        }
    }
    imageLab.image2.refresh()    
}

export default escala