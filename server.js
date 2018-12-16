const express = require('express');
const bodyParser = require('body-parser');
var async = require("async");
const fs = require('fs');
const path = require('path');
var ObjectId = require('mongodb').ObjectId;
const initializeDatabases = require('./services/mongo-connection');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 3000;
app.set('port', port);

const packages = {
    express,
    app,
    async,
    fs,
    path
};
initializeDatabases().then(client => {
    db = client.db('AWS');  
    require('./routes')(packages,db)
  }).catch(err => {
      console.log(err);
    console.error('Failed to make all database connections!')
    process.exit(1)
  })
                
app.listen(app.get('port'), (err) => {
    console.log(`Server running on port: ${app.get('port')}`);
})