# Estuary Stats Tweeter.

Simple Estuary stat "Tweeter"

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

## Other utils
To quickly generate a stats text to tweet.
```
node manual-generator.js 2022-12-29 2022-12-30

// output

@Estuary_Tech stats:

from 2022-12-29 to 2022-12-30

🗂️Content deals: 45
🗄️Total size of deals: 120815614277
💼Sealed deals: 0

For more ℹ️ about Estuary:
🌐https://estuary.tech
📄https://docs.estuary.tech

```


