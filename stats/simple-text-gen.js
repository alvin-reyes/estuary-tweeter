const {createCanvas, loadImage} = require("canvas");

class TwitterSimpleTextGen {
    constructor() {
    }

    generateTwitterPost(json, from, to) {

        this.display = `
        
@Estuary_Tech stats:

from ${from} to ${to}

🗂️Content deals: ${json.totalContentDeals}
🗄️Total size of deals: ${json.totalContentDealsSize}
💼Sealed deals: ${json.totalSealedDeals}

For more ℹ️ about Estuary:
🌐https://estuary.tech
📄https://docs.estuary.tech

        `;

        return this.display;
    };
}

module.exports = TwitterSimpleTextGen;