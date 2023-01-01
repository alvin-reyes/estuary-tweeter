const {createCanvas, loadImage} = require("canvas");

class TwitterSimpleTextGen {
    constructor() {
    }

    generateTwitterPost(json, from, to) {

        this.display = `
        
@Estuary_Tech stats:

from ${from} to ${to}

🗂Content deals made over 24 hours: ${json.totalContentDeals} 
🗄 Content deals size made over 24 hours: ${json.totalContentDealsSize / 1024 / 1024 / 1024} GB
💼 Sealed deals over 24 hours: ${json.totalSealedDeals}
🤝 Total size of sealed deals over 24 hours: ${json.totalSealedDealsSize / 1024 / 1024 / 1024} GB

For more ℹ️ about Estuary:
🌐https://estuary.tech
📄https://docs.estuary.tech

        `;

        return this.display;
    };
}

module.exports = TwitterSimpleTextGen;