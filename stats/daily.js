

// twitter
const Twitter = require("twitter");

// metrics and a simple text gen.
const MetricsApi = require('./metrics.js');
const TwitterSimpleTextGen = require('./simple-text-gen.js')

class DailyTwitterStats {
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
        // get current date and 30 days before
        var today = new Date();
        var yesterday = new Date(new Date().setDate(today.getDate() - 1));

        // reformat date
        var todayDate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var yesterdayDate = yesterday.getDate() + '-' + (yesterday.getMonth() + 1) + '-' + yesterday.getFullYear();

        //  pass to metrics api

        // parse and return.

        // pass to data
        this.client.post(
            'statuses/update',
            {status: this.simpleTextGen.generateTwitterPost() },
            function (error, tweet, response) {
                if (error) throw error;
                console.log(tweet); // Tweet body.
                console.log(response); // Raw response object.
            }
        );
    }

}

module.exports = DailyTwitterStats;