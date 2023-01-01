
// scheduler
const Schedule = require('node-schedule');
const dotenv = require('dotenv');
dotenv.config();


//   initialize the stats runner
const DailyTwitterStats = require('./stats/daily.js');
const WeeklyTwitterStats = require('./stats/weekly.js');
const MonthlyTwitterStats = require('./stats/monthly.js');

const daily = new DailyTwitterStats();
const weekly = new WeeklyTwitterStats();
const monthly = new MonthlyTwitterStats();

// Run daily every day at 1:00pm
Schedule.scheduleJob('0 1 * * *', () => {
    daily.run();
})

// Run weekly 10:00AM on Friday
Schedule.scheduleJob('0 10 * * 5', () => {
    weekly.run();
})

// Run monthly 12AM 1st day of the Month
Schedule.scheduleJob('0 0 1 * *', () => {
    monthly.run();
})

