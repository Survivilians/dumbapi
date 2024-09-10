const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});
// Begin Math - Multiply
app.get('/multiply', function(req,res){
    res.redirect('https://api.survivilians.cn/')
});

app.get('/multiply/:id1/:id2',function(req,res){
    const id1 = parseInt(req.params.id1);
    const id2 = parseInt(req.params.id2)
    var multiplans =  id1 * id2;
    res.send(`${multiplans}`)
});
// End Math - Multiply

// Begin Math - Sum
app.get('/sum',function(req,res){
    res.redirect('https://api.survivilians.cn/')
});

app.get('/sum/:id1/:id2',function(req,res) {
    const sumid1 = parseInt(req.params.id1);
    const sumid2 = parseInt(req.params.id2);

    const sumans = sumid1 + sumid2;
    res.send(`${sumans}`)
})

app.listen(3000);
