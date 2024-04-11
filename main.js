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
import bordasH from "./filtros/bordasH.js"
import bordasV from "./filtros/bordasV.js"
import bordasHV from "./filtros/bordasHV.js"
import fill from "./filtros/fill.js"

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
    { label: 'Bordas H', method: bordasH },
    { label: 'Bordas V', method: bordasV },
    { label: 'Bordas HV', method: bordasHV },
])

