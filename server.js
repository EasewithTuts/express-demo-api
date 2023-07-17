const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

function Isodd(num) {
    if (num % 2 === 1) {
        return true
    } else {
        return false
    }
}

app.get("/odd/:number" ,(req, res) => {
    res.json({ number : parseInt(req.params.number), isOdd: Isodd(req.params.number)})
})

app.listen(3000, () => {
    console.log('its alive in 3000')
})