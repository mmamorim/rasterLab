let fatorCorte = 0.001

function fill(imageLab, x, y) {
    console.log("fill", { x, y });
    let pixelsAux = []
    for (let x = 1; x <= imageLab.image1.width; x++) {
        pixelsAux[x] = []
        for (let y = 1; y <= imageLab.image1.height; y++) {
            pixelsAux[x][y] = 0
        }
    }

    function isBorder(x, y, x1, y1) {
        let p1 = imageLab.image2.getPixel(x, y)
        let p2 = imageLab.image2.getPixel(x1, y1)
        let variacao = p2.r - p1.r
        if (variacao < 0) variacao = variacao * -1
        return (variacao > fatorCorte * 255)
    }

    function fillRec(imageLab, pixelsAux, x, y) {
        if (pixelsAux[x][y] == 0) {
            pixelsAux[x][y] = 1
            if (!isBorder(x, y, x + 1, y)) {
                let pixel = { r: 255, g: 255, b: 255, a: 255 }
                imageLab.image1.setPixel(x, y, pixel)
                console.log("set", { x, y });
            } else {
                fillRec(imageLab, pixelsAux, x + 1, y)
            }
            if (!isBorder(x, y, x - 1, y)) {
                let pixel = { r: 255, g: 255, b: 255, a: 255 }
                imageLab.image1.setPixel(x, y, pixel)
                console.log("set", { x, y });
            } else {
                fillRec(imageLab, pixelsAux, x - 1, y)
            }
            if (!isBorder(x, y, x, y + 1)) {
                let pixel = { r: 255, g: 255, b: 255, a: 255 }
                imageLab.image1.setPixel(x, y + 1, pixel)
                console.log("set", { x, y });
            } else {
                fillRec(imageLab, pixelsAux, x, y + 1)
            }
            if (!isBorder(x, y, x, y - 1)) {
                let pixel = { r: 255, g: 255, b: 255, a: 255 }
                imageLab.image1.setPixel(x, y - 1, pixel)
                console.log("set", { x, y });
            } else {
                fillRec(imageLab, pixelsAux, x, y - 1)
            }
        }
    }



    fillRec(imageLab, pixelsAux, x, y)
    imageLab.image1.refresh()
}

export default fill