const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const FILE = path.join(__dirname, '/api/users.json');

app.use(express.json());


app.get('/api', function (req, res) {
    fs.readFile(FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});
app.post('/api', function(req, res){
    fs.readFile(FILE, function(err, data) {
       let users = JSON.parse(data);
       let filterData = users.filter(function(element) {
           return element.email === req.body.email
       });
       console.log(filterData);
       if(filterData.length > 0) {
           res.sendStatus(209);
       } else {
           let newUser = {
               email: req.body.email,
               password: req.body.password,
               currency: req.body.currency
           };
           users.push(newUser);
           fs.writeFile(FILE, JSON.stringify(users, null), function(err){
               if (err) {
                   console.error(err);
                   process.exit(1);
               }
               res.setHeader('Cache-Control', 'no-cache');
               res.json(users);
           })
       }
    });
    //console.log(req.body);
});
app.listen(8080, function() {
    console.log("Server is up and running on 8080 port")
});