# rasterLab

## Laboratório para aulas de Processamento Digital de Imagens


### Como usar? veja (index.html / main.js) 

```javascript
import imageLab from "./imageLab.js"

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')
```


### Trecho padrão para percorrer todos os pixels 

```javascript
for(let y=1; y <= imageLab.image1.height; y++) {
    for(let x=1; x <= imageLab.image1.width; x++) {
        let pixel = imageLab.image1.getPixel(x,y)
        // processamento de cada pixel da imagem
    }
}
imageLab.image2.refresh()
```

[Sobre a foto da Lena](https://en.wikipedia.org/wiki/Lenna)