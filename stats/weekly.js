const Twitter = require("twitter");
const MetricsApi = require('./metrics.js');
const axios = require("axios");
const TwitterSimpleTextGen = require("./simple-text-gen.js");

class WeeklyTwitterStats {

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
        var last7Days = new Date(new Date().setDate(today.getDate() - 7));

        // reformat date
        var todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var last7DaysDate = last7Days.getFullYear() + '-' + (last7Days.getMonth() + 1) + '-' + last7Days.getDate();
        var display = "";
        axios.get(this.metricsApi.apiHost + '?from=' + last7DaysDate + '&to=' + todayDate)
            .then((response) => {
                display = this.simpleTextGen.generateTwitterPost(response.data,last7DaysDate,todayDate);
                console.log(display);

                // pass to data
                this.client.post(
                    'statuses/update',
                    // { status: canvas.toDataURL() },
                    {status: display },
                    function (error, tweet, response) {
                        if (error) throw error;
                        console.log(tweet); // Tweet body.
                        console.log(response); // Raw response object.
                    }
                );
            })

    }

}

module.exports = WeeklyTwitterStats;