
// scheduler
const Schedule = require('node-schedule');

const TwitterCanvasGenerator = require('./stats/canvas-gen.js');
const TwitterSimpleTextGen = require('./stats/simple-text-gen.js');
const DailyTwitterStats = require('./stats/daily.js');
const WeeklyTwitterStats = require('./stats/weekly.js');
const MonthlyTwitterStats = require('./stats/monthly.js');


const daily = new DailyTwitterStats();
const weekly = new WeeklyTwitterStats();
const monthly = new MonthlyTwitterStats();

console.log(process.env.CONSUMER_KEY)

// Run daily every day at 1:00pm
Schedule.scheduleJob('0 1 * * *', () => {
    daily.run();
})

// Run weekly 10:00AM on Friday
Schedule.scheduleJob('0 10 * * 5', () => {
    weekly.run();;
})

// Run monthly 12AM 1st day of the Month
Schedule.scheduleJob('0 0 1 * *', () => {
    monthly.run();
})


////////////////////////////////////////////////////////////////////////////////////////////////
// for testing ONLY - entire section will be removed after
const Twitter = require('twitter');
const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

// canva
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

tweetStats();
function tweetStats() {
    // Write the stats
    const canvasGen = new TwitterCanvasGenerator();
    console.log(canvasGen.generateTwitterImage());

    client.post(
        'statuses/update',
        { status: canvas.toDataURL() },
        function (error, tweet, response) {
            if (error) throw error;
            console.log(tweet); // Tweet body.
            console.log(response); // Raw response object.
        }
    );
}
