import imageLab from "./imageLab.js"
import brilho from "./filtros/brilho.js"
import monocromatico from "./filtros/monocromatico.js"
import negativo from "./filtros/negativo.js"
import sepia from "./filtros/sepia.js"
import flipH from "./filtros/flipH.js"

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

function mapBtn(btnID,funcFiltro) {
    document.getElementById(btnID).addEventListener('click', () => {
        funcFiltro(imageLab)
    });
}

mapBtn('btn1',brilho)
mapBtn('btn2',monocromatico)
mapBtn('btn3',negativo)
mapBtn('btn4',sepia)
mapBtn('btn5',flipH)

