const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/lab.html'));
});


const port = process.env.PORT || 4500;
app.listen(port, function(){console.log(`Port is chillin on ${port}`)});

