# Estuary statistics tweeter

Simple Estuary stat "Tweeter"

This uses the metrics-api web service endpoint: https://metrics-api.estuary.tech/api/v1/stats/to-twitter?from=2022-12-01&to=2022-12-30. Dates varies based on the scheduled job run.
## Set up twitter API key

```
CONSUMER_KEY=<TWITTER_API_KEY>
CONSUMER_SECRET=<TWITTER_API_SECRET>
ACCESS_TOKEN_KEY=<TWITTER_API_ACCESS_TOKEN_KEY>
ACCESS_TOKEN_SECRET=<TWITTER_API_ACCESS_TOKEN_SECRET>
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
node manual-generator.js 2022-12-30 to 2022-12-31
```

## Output
```
@Estuary_Tech stats:

from 2022-12-30 to 2022-12-31

🗂️Content deals made over 24 hours: 44
🗄Content deals size made over 24 hours: 699.4069983139634 GB
💼Sealed deals over 24 hours: 0
🤝Total size of sealed deals over 24 hours: 0 GB


For more ℹ️ about Estuary:
🌐https://estuary.tech
📄https://docs.estuary.tech
```