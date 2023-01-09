
const MetricsApi = require('../api/metrics.js');
const axios = require("axios");

const metricsApi = new MetricsApi()

args = process.argv.slice(2);
let display = "";
axios.get(metricsApi.apiHost + '?from=' + args[0] + '&to=' + args[1])
    .then((response) => {
        json = response.data;

        let contentSizeN = 0;
        let sealedSizeN = 0;

        let contentSize = json.totalContentDealsSize / 1024 / 1024 / 1024
        let sealedSize = json.totalSealedDealsSize / 1024 / 1024 / 1024


        let contentSizeUnit = "GB"
        if (contentSize > 1024) {
            contentSize = contentSize / 1024
            contentSizeUnit = "TB"
        }


        let sealedSizeUnit = "GB"
        if (sealedSize > 1024) {
                sealedSize = sealedSize / 1024
                sealedSizeUnit = "TB"
        }

        // 2 decimal places
        contentSizeN = Math.round(contentSize * 100) / 100
        sealedSizeN = Math.round(sealedSize * 100) / 100

        // display template
            display = `
@Estuary_Tech stats:

from ${args[0]} to ${args[1]}

🗂️Content deals made: ${json.totalContentDeals}
🗄Content deals size made: ${contentSizeN} ${contentSizeUnit}
💼Sealed deals: ${json.totalSealedDeals}
🤝Total size of sealed deals made: ${sealedSizeN} ${sealedSizeUnit}

For more ℹ️ about Estuary:
🌐https://estuary.tech
📄https://docs.estuary.tech

`;

        console.log(display);
    })

