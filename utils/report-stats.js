
const MetricsApi = require('../api/metrics.js');
const axios = require("axios");

const metricsApi = new MetricsApi()

args = process.argv.slice(2);
let display = "";
axios.get(metricsApi.apiHost + '?from=' + args[0] + '&to=' + args[1])
    .then((response) => {
        json = response.data;
        // 2 decimal places
        contentSize = json.totalContentDealsSize / 1024 / 1024 / 1024
        let contentSizeN = Math.round(contentSize * 100) / 100

        let sealedSize = json.totalSealedDealsSize / 1024 / 1024 / 1024
        let sealedSizeN = Math.round(sealedSize * 100) / 100

        display = `
@Estuary_Tech stats:

from ${args[0]} to ${args[1]}

🗂️Content deals made over 24 hours: ${json.totalContentDeals}
🗄Content deals size made over 24 hours: ${contentSizeN} GB
💼Sealed deals over 24 hours: ${json.totalSealedDeals}
🤝Total size of sealed deals over 24 hours: ${sealedSizeN} GB

For more ℹ️ about Estuary:
🌐https://estuary.tech
📄https://docs.estuary.tech

`;

        console.log(display);
    })

