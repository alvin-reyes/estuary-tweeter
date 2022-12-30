const Twitter = require("twitter");
const MetricsApi = require('./metrics.js');

class MonthlyTwitterStats {

    constructor() {
        this.metricsApi = new MetricsApi();
        this.client = new Twitter({
            consumer_key: process.env.CONSUMER_KEY,
            consumer_secret: process.env.CONSUMER_SECRET,
            access_token_key: process.env.ACCESS_TOKEN_KEY,
            access_token_secret: process.env.ACCESS_TOKEN_SECRET,
        });
    }

    run() {
        // get date
        var today = new Date();
        var last30Days = new Date(new Date().setDate(today.getDate() - 30));

        // reformat date
        var todayDate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var last30DaysDate = last30Days.getDate() + '-' + (last30Days.getMonth() + 1) + '-' + last30Days.getFullYear();

        //  pass to metrics api

        // parse and return.


        // pass to data
    }

}

module.exports = MonthlyTwitterStats;