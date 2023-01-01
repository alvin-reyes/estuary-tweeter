const {TwitterApi} = require("twitter-api-v2");
const axios = require("axios");
const MetricsApi = require('../api/metrics.js');
const TwitterSimpleTextGen = require("../templates/simple-text-gen.js");
class WeeklyTwitterStats {

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
        var last7Days = new Date(new Date().setDate(today.getDate() - 7));

        // reformat date
        var monthToday = `${ today.getMonth() + 1 }`.padStart(2, '0');
        var dayToday = `${ today.getDate() }`.padStart(2, '0');
        var todayDate = `${ today.getFullYear() }-${ monthToday }-${ dayToday }`;

        var monthLast7Days = `${ last7Days.getMonth() + 1 }`.padStart(2, '0');
        var dayLast7Days = `${ last7Days.getDate() }`.padStart(2, '0');
        var last7DaysDate = `${ last7Days.getFullYear() }-${ monthLast7Days }-${ dayLast7Days }`;

        var display = "";
        axios.get(this.metricsApi.apiHost + '?from=' + last7DaysDate + '&to=' + todayDate)
            .then(async (response) => {
                display = this.simpleTextGen.generateTwitterPost(response.data, yesterdayDate, todayDate);
                const {data: createdTweet} = await this.client.v2.tweet(display, {});
                console.log('Tweet', createdTweet.id, ':', createdTweet.text);
            })

    }

}

module.exports = WeeklyTwitterStats;