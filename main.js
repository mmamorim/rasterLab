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
])

