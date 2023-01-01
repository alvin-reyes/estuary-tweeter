const Twitter = require("twitter");
const {TwitterApi} = require("twitter-api-v2");
const MetricsApi = require('./metrics.js');
const axios = require("axios");
const TwitterSimpleTextGen = require("./simple-text-gen");

class MonthlyTwitterStats {

    constructor() {
        this.metricsApi = new MetricsApi();
        this.simpleTextGen = new TwitterSimpleTextGen();
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
        var todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var last30DaysDate = last30Days.getFullYear() + '-' + (last30Days.getMonth() + 1) + '-' + last30Days.getDate();
        var display = "";
        //  pass to metrics api
        axios.get(this.metricsApi.apiHost + '?from=' + yesterdayDate + '&to=' + todayDate)
            .then(async (response) => {
                display = this.simpleTextGen.generateTwitterPost(response.data, yesterdayDate, todayDate);
                const {data: createdTweet} = await this.client.v2.tweet(display, {});
                console.log('Tweet', createdTweet.id, ':', createdTweet.text);
            })
    }

}

module.exports = MonthlyTwitterStats;