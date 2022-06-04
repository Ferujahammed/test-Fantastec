const express = require('express')
const featursApi = require('./routes/features')
const PORT = process.env.PORT || 5000

const app = express();
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api', featursApi)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));