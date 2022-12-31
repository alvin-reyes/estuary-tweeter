const {createCanvas, loadImage} = require("canvas");

class TwitterSimpleTextGen {
    constructor() {
    }

    generateTwitterPost(json) {

        this.display = `
                  
            @Estuary_Tech stats:
            
            from 2022-12-29 to 2022-12-30
            
            🗂️Content deals: 45
            🗄️Total size of deals: 120815614277
            💼Sealed deals: 0
            
            For more ℹ️ about Estuary:
            🌐https://estuary.tech
            📄https://docs.estuary.tech
            

        `;

        return this.display;
    };
}

module.exports = TwitterSimpleTextGen;