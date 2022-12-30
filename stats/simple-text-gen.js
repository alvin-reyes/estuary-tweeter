const {createCanvas, loadImage} = require("canvas");

class TwitterSimpleTextGen {
    constructor() {
    }

    generateTwitterPost(json) {

        this.display = `
            @Estuary_Tech Stats:
            
            Contents added (24 hours): { contentAdded }
            Deals sealed (24 hours):  { sealedDeals }
            
            For more ℹ️ about 
            @Estuary_Tech:
            🌐https://estuary.tech
            📄https://docs.estuary.tech
            🧑‍💻https://github.com/application-research/estuary
        `;

        return this.display;
    };
}

module.exports = TwitterSimpleTextGen;