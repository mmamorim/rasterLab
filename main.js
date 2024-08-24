import imageLab from "./imageLab/imageLab.js"
import createFilters from './imageLab/createFilters.js'

import brilho from "./filtros/brilho.js"
import mono from "./filtros/monocromatico.js"
import sepia from "./filtros/sepia.js"

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

createFilters(imageLab, [
    { label: 'Brilho', method: brilho },
    { label: 'Monocromático', method: mono },
    { label: 'Sépia', method: sepia },
])

