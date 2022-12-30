const Twitter = require("twitter");
const MetricsApi = require('./metrics.js');
const axios = require("axios");

class WeeklyTwitterStats {

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
        var last7Days = new Date(new Date().setDate(today.getDate() - 7));

        // reformat date
        var todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var last7DaysDate = last7Days.getFullYear() + '-' + (last7Days.getMonth() + 1) + '-' + last7Days.getDate();

        axios.get(this.metricsApi.apiHost + '?from=' + last7DaysDate + '&to=' + todayDate)
            .then((response) => {
                console.log("weekly");
                console.log(response.data);
                this.simpleTextGen.display(response.data);
            })

        // pass to data
        // this.client.post(
        //     'statuses/update',
        //     // { status: canvas.toDataURL() },
        //     {status: this.display },
        //     function (error, tweet, response) {
        //         if (error) throw error;
        //         console.log(tweet); // Tweet body.
        //         console.log(response); // Raw response object.
        //     }
        // );
    }

}

module.exports = WeeklyTwitterStats;