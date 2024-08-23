import imageLab from "./imageLab/imageLab.js"
import createFilters from './imageLab/createFilters.js'

import brilho from "./filtros/brilho.js"

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

createFilters(imageLab, [
    { label: 'Brilho', method: brilho },
])

