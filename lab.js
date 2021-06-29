const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: '67e626ef345e449b86111f5058cf843d',
  captureUncaught: false,
  captureUnhandledRejections: false
});

rollbar.log('Brendan is Awesome!');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/lab.html'));
});

app.get('/', function(req, res){
    rollbar.log(getAwesome())
    rollbar.log("Error: Brendan E is awesome");
});

const port = process.env.PORT || 4500;
app.listen(port, function(){console.log(`Port is chillin on ${port}`)});

