const express = require('express')
const app = express()
const router = require('./router')

app.use(router)
app.get("/", (req, res) => {
    res.send("This is the homepage")
})
app.listen(3000, () => console.log('listening on port 3000'))
