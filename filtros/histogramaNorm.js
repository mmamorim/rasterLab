import createGraph from "../imageLab/grafico.js";
import createGraph2 from "../imageLab/grafico2.js";

function histogramaNorm(imageLab) {
    let vetHistograma = []
    let vetHistogramaOriginal = []
    let vetLabels = []
    for (let i = 0; i <= 255; i++) {
        vetHistograma[i] = 0;
        vetHistogramaOriginal[i] = 0
        vetLabels[i] = i;
    }

    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x, y)
            let media = Math.round((pixel.r + pixel.g + pixel.b) / 3)
            pixel.r = media
            pixel.g = media
            pixel.b = media
            imageLab.image2.setPixel(x, y, pixel)
            vetHistograma[media]++
            vetHistogramaOriginal[media]++
        }
    }
    let qtdePixels = imageLab.image1.height * imageLab.image1.width
    for (let i = 0; i <= 255; i++) {
        vetHistograma[i] = vetHistograma[i] / qtdePixels;
    }
    for (let i = 1; i <= 255; i++) {
        vetHistograma[i] = vetHistograma[i] + vetHistograma[i - 1];
    }
    console.log("vetHistograma", vetHistograma);

    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x, y)
            let media = Math.round((pixel.r + pixel.g + pixel.b) / 3)
            let value = Math.round(vetHistograma[media] * 255)
            pixel.r = value
            pixel.g = value
            pixel.b = value
            imageLab.image2.setPixel(x, y, pixel)
        }
    }
    imageLab.image2.refresh()


    let vetHistograma2 = []
    let vetLabels2 = []
    for (let i = 0; i <= 255; i++) {
        vetHistograma2[i] = 0;
        vetLabels2[i] = i;
    }

    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image2.getPixel(x, y)
            let media = Math.round((pixel.r + pixel.g + pixel.b) / 3)
            vetHistograma2[media]++
            pixel.r = media
            pixel.g = media
            pixel.b = media
        }
    }

    createGraph(vetLabels, vetHistograma, (event, array) => {
        if (array != undefined && array[0]) {
            let idx = array[0].index
            console.log(idx);

            for (let y = 1; y <= imageLab.image1.height; y++) {
                for (let x = 1; x <= imageLab.image1.width; x++) {
                    // processamento de cada pixel da imagem
                    let pixel = imageLab.image2.getPixel(x, y)
                    let media = Math.round((pixel.r + pixel.g + pixel.b) / 3)
                    if (media > idx) {
                        let pixel = { r: 255, g: 255, b: 255, a: 255 }
                        imageLab.image1.setPixel(x, y, pixel)
                    } else {
                        let pixel = { r: 0, g: 0, b: 0, a: 255 }
                        imageLab.image1.setPixel(x, y, pixel)
                    }
                }
            }
            imageLab.image1.refresh()
        }

    })
    createGraph2(vetLabels2, vetHistograma2)
}

export default histogramaNorm