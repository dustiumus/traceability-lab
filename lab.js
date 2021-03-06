const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: '67e626ef345e449b86111f5058cf843d',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log('Brendan is Awesome!');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/lab.html'));
});

app.get('/getAwesome', function(getAwesome){
    rollbar.error('/getAwesome is Unavailable');
});

app.get('/rollbarSucks', function(rollbarSucks){
    rollbar.critical('rollbarSucks is Unavailable');
});

app.get('/devOpsBlows', function(devOpsBlows){
    rollbar.warning('DevOps is not very fun');
});

app.get('/rollbarCritical', function(rollbarCritical){
    rollbar.critical('Rollbar is low on my list');
});

const port = process.env.PORT || 4500;
app.listen(port, function(){console.log(`Port is chillin on ${port}`)});

