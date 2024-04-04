import imageLab from "./imageLab/imageLab.js"
import createFilters from './imageLab/createFilters.js'

import brilho from "./filtros/brilho.js"
import monocromatico from "./filtros/monocromatico.js"
import negativo from "./filtros/negativo.js"
import sepia from "./filtros/sepia.js"
import flipH from "./filtros/flipH.js"
import histograma from "./filtros/histograma.js"
import flipV from "./filtros/flipV.js"
import flipHV from "./filtros/flipHV.js"
import escala from "./filtros/escala.js"
import histogramaNorm from "./filtros/histogramaNorm.js"
import bordas from "./filtros/bordas.js"
import bordasV from "./filtros/bordasV.js"

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

createFilters(imageLab, [
    { label: 'Brilho', method: brilho },
    { label: 'Monocromático', method: monocromatico },
    { label: 'Negativo', method: negativo },
    { label: 'Sépia', method: sepia },
    { label: 'Flip Horizontal', method: flipH },
    { label: 'Flip Vertical', method: flipV },
    { label: 'Flip Vertical/Horizontal', method: flipHV },
    { label: 'Histograma', method: histograma },
    { label: 'Escala', method: escala },
    { label: 'HistogramaNorm', method: histogramaNorm },
    { label: 'Bordas', method: bordas },
    { label: 'Bordas Vertical', method: bordasV },
])

let elem = document.getElementById("canvas_source")
console.log(elem);

elem.onclick = function (e) {
    let { x, y } = e
    console.log("e", e );
    console.log("click", { x, y });
}