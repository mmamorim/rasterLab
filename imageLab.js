
const imageLab = {
    image1: {},
    image2: {},

    async toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    },

    init() {
        let value = localStorage.getItem('imageLab_img1')
        if (value) {
            console.log('🖼️ image01 already exist!');
            imageLab.loadImageFromBase64(value)
            let canvas = document.getElementById("canvas_source");
            let canvas2 = document.getElementById("canvas_dest");
            imageLab.image1.canvas = canvas
            imageLab.image2.canvas2 = canvas2
        } else {
            console.log('image01 not found');
        }
    },

    async loadImageFromBase64(base64) {
        //console.log(base64)
        imageLab.image1 = imageLab.newImage(base64)
        imageLab.image2 = imageLab.newImage(base64)
        let img = new Image()
        img.onload = function () {
            let { width, height } = this
            //console.log({ width, height })
            let canvas = document.getElementById("canvas_source");
            let canvas2 = document.getElementById("canvas_dest");
            imageLab.image1.canvas = canvas
            imageLab.image2.canvas2 = canvas2
            canvas.width = width
            canvas.height = height
            canvas2.width = width
            canvas2.height = height
            let ctx = canvas.getContext("2d");
            let ctx2 = canvas2.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx2.drawImage(img, 0, 0);
            let data = ctx.getImageData(1, 1, width, height);
            let data2 = ctx2.getImageData(1, 1, width, height);
            //console.log('data', data);
            imageLab.image1.data = data.data
            imageLab.image1.width = data.width
            imageLab.image1.height = data.height
            imageLab.image1.ctx = ctx
            imageLab.image2.data = data2.data
            imageLab.image2.width = data2.width
            imageLab.image2.height = data2.height
            imageLab.image2.ctx = ctx2
            let value = imageLab.image1.base64
            localStorage.setItem('imageLab_img1', value)
        }
        img.src = base64;
    },

    setLoadButtonID(btnID) {
        document.getElementById(btnID).addEventListener("change", async (e) => {
            let files = e.target.files
            //console.log('files', files);
            const base64 = await imageLab.toBase64(files[0]);
            imageLab.loadImageFromBase64(base64)
        })
    },

    newImage(base64) {
        let image = {
            base64,
            getPixel(x, y) {
                let pos = ((y - 1) * image.width) * 4 + ((x - 1) * 4)
                return {
                    r: image.data[pos],
                    g: image.data[pos + 1],
                    b: image.data[pos + 2],
                    a: image.data[pos + 3],
                }
            },
            setPixel(x, y, pixel) {
                let pos = ((y - 1) * image.width) * 4 + ((x - 1) * 4)
                image.data[pos] = pixel.r
                image.data[pos + 1] = pixel.g
                image.data[pos + 2] = pixel.b
                image.data[pos + 3] = pixel.a
            },
            refresh() {
                let imageData = new ImageData(image.data, image.width, image.height)
                //console.log('imageData',imageData);
                image.ctx.putImageData(imageData, 0, 0);
            },
            newImage(width, height) {
                console.log('image.canvas',image.canvas);
                image.canvas = document.getElementById("canvas_dest");
                image.canvas.width = width
                image.canvas.height = height
                //image.width = width
                //image.height = height
                //let imageData = new ImageData(image.data, width, height)
                //let imageData = new ImageData(width,height);
                //image.data = imageData
            }
        }
        return image
    }
}

imageLab.init()

export default imageLab