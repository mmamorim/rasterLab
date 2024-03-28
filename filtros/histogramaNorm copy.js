import createGraph from "../imageLab/grafico.js";

function histogramaNorm(imageLab) {
    let vetHistograma = []
    let vetLabels = []
    for (let i = 0; i <= 255; i++) {
        vetHistograma[i] = 0;
        vetLabels[i] = i;
    }

    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let media = Math.round((pixel.r+pixel.g+pixel.b)/3)
            pixel.r = media
            pixel.g = media
            pixel.b = media
            imageLab.image2.setPixel(x,y,pixel)
            vetHistograma[media]++
        }
    }
    let qtdePixels = imageLab.image1.height * imageLab.image1.width
    for (let i = 0; i <= 255; i++) {
        vetHistograma[i] = vetHistograma[i] / qtdePixels;
    }
    for (let i = 1; i <= 255; i++) {
        vetHistograma[i] = vetHistograma[i] + vetHistograma[i-1];
    }
    console.log("vetHistograma", vetHistograma);
    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let media = Math.round((pixel.r+pixel.g+pixel.b)/3)
            let value = Math.round(vetHistograma[media] * 255)
            pixel.r = value
            pixel.g = value
            pixel.b = value
            imageLab.image2.setPixel(x,y,pixel)
        }
    }
    imageLab.image2.refresh()
    
    createGraph(vetLabels,vetHistograma)
}

export default histogramaNorm