const express = require('express')
const cors = require('cors');
const router = require('./routes/api')

const db = require('./db/db')

const app = express();

const port = 9001;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));


app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})
