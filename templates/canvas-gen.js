const {createCanvas, loadImage} = require("canvas");

class TwitterCanvasGenerator {

    constructor() {
        this.canvas = createCanvas(800, 500)
        this.ctx = this.canvas.getContext('2d')
        this.ctx.font = '30px roboto'
        this.ctx.rotate(0)
    }

    generateTwitterImage(json) {
        this._json = json;
        // Write the stats
        this.ctx.fillText("stats",50, 110)
        loadImage('img/estuary-logo.png').then((image) => {
            this.ctx.drawImage(image, 50, 0, 500, 80)
            console.log('<img src="' + this.canvas.toDataURL() + '" />')
        })

        return this.canvas.toDataURL()
    };
}

module.exports = TwitterCanvasGenerator;