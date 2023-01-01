const {TwitterApi} = require("twitter-api-v2");
const axios = require("axios");
const MetricsApi = require('../api/metrics.js');
const TwitterSimpleTextGen = require("../templates/simple-text-gen");

class MonthlyTwitterStats {

    constructor() {
        this.metricsApi = new MetricsApi();
        this.simpleTextGen = new TwitterSimpleTextGen();
        this.client = new TwitterApi({
            appKey: process.env.CONSUMER_KEY,
            appSecret: process.env.CONSUMER_SECRET,
            accessToken: process.env.ACCESS_TOKEN_KEY,
            accessSecret: process.env.ACCESS_TOKEN_SECRET,
        });
    }

    run() {
        // get date
        var today = new Date();
        var last30Days = new Date(new Date().setDate(today.getDate() - 30));

        // reformat date
        var monthToday = `${ today.getMonth() + 1 }`.padStart(2, '0');
        var dayToday = `${ today.getDate() }`.padStart(2, '0');
        var todayDate = `${ today.getFullYear() }-${ monthToday }-${ dayToday }`;

        var monthLast30Days = `${ last30Days.getMonth() + 1 }`.padStart(2, '0');
        var dayLast30Days = `${ last30Days.getDate() }`.padStart(2, '0');
        var last30DaysDate = `${ last30Days.getFullYear() }-${ monthLast30Days }-${ dayLast30Days }`;

        var display = "";
        //  pass to metrics api
        axios.get(this.metricsApi.apiHost + '?from=' + last30DaysDate + '&to=' + todayDate)
            .then(async (response) => {
                display = this.simpleTextGen.generateTwitterPost(response.data, yesterdayDate, todayDate);
                const {data: createdTweet} = await this.client.v2.tweet(display, {});
                console.log('Tweet', createdTweet.id, ':', createdTweet.text);
            })
    }

}

module.exports = MonthlyTwitterStats;