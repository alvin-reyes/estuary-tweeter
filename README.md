# Estuary statistics tweeter

Simple Estuary stat "Tweeter"

This uses the metrics-api web service endpoint: https://metrics-api.estuary.tech/api/v1/stats/to-twitter?from=2022-12-01&to=2022-12-30. Dates varies based on the scheduled job run.
## Set up twitter API key

```
CONSUMER_KEY=redacted
CONSUMER_SECRET=redacted
ACCESS_TOKEN_KEY=redacted
ACCESS_TOKEN_SECRET=redacted
```

## Running the script
``` 
node index.js
```

This runs a job that will run on the following scheduler
```
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
```

## Other utils
To quickly generate a stats text to tweet.
```
node manual-generator.js 2022-12-29 2022-12-30

// output (copy and paste to your twitter account)

@Estuary_Tech stats:

from 2022-12-29 to 2022-12-30

🗂️Content deals: 45
🗄️Total size of deals: 120815614277
💼Sealed deals: 0

For more ℹ️ about Estuary:
🌐https://estuary.tech
📄https://docs.estuary.tech
```
