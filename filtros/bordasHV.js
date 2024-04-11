function bordasHV(imageLab) {
    let fatorCorte = 0.05
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            let p1 = imageLab.image2.getPixel(x,y)
            let p2 = imageLab.image2.getPixel(x,y+1)
            let p3 = imageLab.image2.getPixel(x+1,y)
            let variacao = p2.r - p1.r
            let variacao2 = p3.r - p1.r
            if(variacao < 0) variacao = variacao * -1
            if(variacao2 < 0) variacao2 = variacao2 * -1
            if(variacao > fatorCorte * 255 || variacao2 > fatorCorte * 255) {
                let pixel = { r: 255, g: 255, b: 255, a: 255 }                
                imageLab.image1.setPixel(x,y,pixel)
            } else {
                let pixel = { r: 0, g: 0, b: 0, a: 255 }                
                imageLab.image1.setPixel(x,y,pixel)
            }
        }
    }
    imageLab.image1.refresh()
}

export default bordasHV