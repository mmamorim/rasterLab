import imageLab from "./imageLab/imageLab.js"
import createFilters from './imageLab/createFilters.js'

import brilho from "./filtros/brilho.js"
import mono from "./filtros/monocromatico.js"
import sepia from "./filtros/sepia.js"
import rota90dir from "./filtros/rota90dir.js"
import rota90esq from "./filtros/rota90esq.js"
import flipVertical from "./filtros/flipVertical.js"
import flipHorizontal from "./filtros/flipHorizontal.js"
import escala from "./filtros/escala.js"
import histograma from "./filtros/histograma.js"
import histogramaNorm from "./filtros/histogramaNorm.js"

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

createFilters(imageLab, [
    { label: 'Brilho', method: brilho },
    { label: 'Monocromático', method: mono },
    { label: 'Sépia', method: sepia },
    { label: 'Rotação 90 D', method: rota90dir },
    { label: 'Rotação 90 E', method: rota90esq },
    { label: 'Flip V', method: flipVertical },
    { label: 'Flip H', method: flipHorizontal },
    { label: 'Escala', method: escala },
    { label: 'histograma', method: histograma },
    { label: 'histogramaNorm', method: histogramaNorm },
])

