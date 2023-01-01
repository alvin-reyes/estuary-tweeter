const {createCanvas, loadImage} = require("canvas");

class TwitterSimpleTextGen {
    constructor() {
    }

    generateTwitterPost(json, from, to) {
        // 2 decimal places
        let contentSize = json.totalContentDealsSize / 1024 / 1024 / 1024
        let contentSizeN = Math.round(contentSize * 100) / 100

        let sealedSize = json.totalSealedDealsSize / 1024 / 1024 / 1024
        let sealedSizeN = Math.round(sealedSize * 100) / 100

        this.display = `
@Estuary_Tech stats:

from ${from} to ${to}

🗂Content deals: ${json.totalContentDeals} 
🗄Content deals size: ${contentSizeN} GB
💼Sealed deals: ${json.totalSealedDeals}
🤝Sealed deals size: ${sealedSizeN} GB

More about Estuary:
🌐https://estuary.tech
`;

        return this.display;
    };
}

module.exports = TwitterSimpleTextGen;