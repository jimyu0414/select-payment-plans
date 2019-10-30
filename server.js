//setup backend server
const express = require('express');
const app = express();
var fs = require('fs');
var bodyParser = require("body-parser");
app.use(bodyParser());

app.use(
  express.static('public')
);

/* 
fix cors issues on expressjs
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*
get avaiable payment plans from json
*/
app.get('/api/avaiable-plans',(req,res)=>{
    const plans = require('./public/plans.json')
    res.json(plans)
});

/*
get submitted payment plans from json
*/
app.get('/api/submitted-plans',(req,res)=>{
  const plans = require('./public/submitted-plans.json')
  res.json(plans)
});

/*
write submitted plans to json 
*/
app.post('/api/submit-to-plan',(req,res)=>{
  const fs = require('fs')

  // console.log(JSON.stringify(req.body))

  const plans= req.body

    saveSubmittedPlansToPublicFolder(plans, function(err) {
    if (err) {
      res.status(404).send('plans not saved');
      return;
    }

    res.send('plans Saved');
  });

});

function saveSubmittedPlansToPublicFolder(plans, callback) {
  fs.writeFile('./public/submitted-plans.json', JSON.stringify(plans), callback);
}

const PORT = 3001;

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
