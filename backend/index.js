const express = require('express')

const app = express()

app.get('/', function(resquest, response){
    return response.send("Hello, Word")
})

app.listen(3333);
