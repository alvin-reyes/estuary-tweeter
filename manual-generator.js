
const MetricsApi = require('./stats/metrics.js');
const axios = require("axios");

const metricsApi = new MetricsApi()

args = process.argv.slice(2);
let display = "";
axios.get(metricsApi.apiHost + '?from=' + args[0] + '&to=' + args[1])
    .then((response) => {
        display = `
@Estuary_Tech stats:

from ${args[0]} to ${args[1]}

🗂️Content deals: ${response.data.totalContentDeals}
🗄️Total size of deals: ${response.data.totalContentDealsSize}
💼Sealed deals: ${response.data.totalSealedDeals}

For more ℹ️ about Estuary:
🌐https://estuary.tech
📄https://docs.estuary.tech

`;

        console.log(display);
    })

