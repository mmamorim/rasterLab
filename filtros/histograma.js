import createGraph from "../imageLab/grafico.js";

function histograma(imageLab) {
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
    imageLab.image2.refresh()
    console.log("vetHistograma", vetHistograma);
    createGraph(vetLabels,vetHistograma)
}

export default histograma