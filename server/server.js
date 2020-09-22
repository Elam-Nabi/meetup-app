const express = require('express')
const cors = require('cors')
const path = require('path')
const meetup = require('./db/meetups')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "/dist")));
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "/dist", "index.html"))
);

app.get('/meetups', (req, res) => {
    const eventData = meetup.getMeetupEvents()
    res.json(eventData)
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));