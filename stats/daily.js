// metrics and a simple text gen.
const MetricsApi = require('../api/metrics.js');
const axios = require("axios");
const TwitterSimpleTextGen = require('../templates/simple-text-gen.js')
const {TwitterApi} = require("twitter-api-v2");

class DailyTwitterStats {


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
        // get current date and 30 days before
        var today = new Date();
        var yesterday = new Date(new Date().setDate(today.getDate() - 1));

        // reformat date
        var monthToday = `${ today.getMonth() + 1 }`.padStart(2, '0');
        var dayToday = `${ today.getDate() }`.padStart(2, '0');
        var todayDate = `${ today.getFullYear() }-${ monthToday }-${ dayToday }`;

        var monthYesterday = `${ yesterday.getMonth() + 1 }`.padStart(2, '0');
        var dayYesterday = `${ yesterday.getDate() }`.padStart(2, '0');
        var yesterdayDate = `${ yesterday.getFullYear() }-${ monthYesterday }-${ dayYesterday }`;

        var display = "";
        //  pass to metrics api
        axios.get(this.metricsApi.apiHost + '?from=' + yesterdayDate + '&to=' + todayDate)
            .then(async (response) => {

                display = this.simpleTextGen.generateTwitterPost(response.data, yesterdayDate, todayDate);
                const {data: createdTweet} = await this.client.v2.tweet(display, {

                });
                console.log('Tweet', createdTweet.id, ':', createdTweet.text);
            })
    }
}

module.exports = DailyTwitterStats;