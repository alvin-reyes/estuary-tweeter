const {createCanvas, loadImage} = require("canvas");

class TwitterSimpleTextGen {
    constructor() {
    }

    generateTwitterPost(json, from, to) {

        let contentSizeN = 0;
        let sealedSizeN = 0;

        let contentSize = json.totalContentDealsSize / 1024 / 1024 / 1024
        let sealedSize = json.totalSealedDealsSize / 1024 / 1024 / 1024

        let defaultContentSizeUnit = "GB"
        let defaultSealedSizeUnit = "GB"

        if (contentSize > 1024) {
            contentSize = contentSize / 1024
            defaultContentSizeUnit = "TB"
        }

        if (sealedSize > 1024) {
            sealedSize = sealedSize / 1024
            defaultSealedSizeUnit = "TB"
        }

        // 2 decimal places
        contentSizeN = Math.round(contentSize * 100) / 100
        sealedSizeN = Math.round(sealedSize * 100) / 100

        // display template


        this.display = `
@Estuary_Tech stats:

from ${from} to ${to}

🗂Content deals: ${json.totalContentDeals} 
🗄Content deals size: ${contentSizeN} ${defaultContentSizeUnit}
💼Sealed deals: ${json.totalSealedDeals}
🤝Sealed deals size: ${sealedSizeN} ${defaultSealedSizeUnit}

More about Estuary:
🌐https://estuary.tech
`;

        return this.display;
    };
}

module.exports = TwitterSimpleTextGen;