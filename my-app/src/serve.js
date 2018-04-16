const React = require('react');
const JsonNasdaq = require('./symbols/nasdaq.json');
const express = require('express')
const app = express()
var mysql = require('mysql');
const http = require('http')
const socketIO = require('socket.io');
const fetch = require("node-fetch");

var connection = mysql.createConnection({host: 'localhost', user: 'root', password: '', database: 'greenStox'});

connection.connect((err) => {
    if (err) 
        throw err;
    console.log('Connected!');
});

/*for (let i in JsonNasdaq) {
    const bourseM = {
        name: JsonNasdaq[i]["name"],
        symbol: JsonNasdaq[i]["symbol"]
    }
    console.log(bourseM);
    connection.query('INSERT INTO stocks_nasdaq (name, symbol) VALUES("'+bourseM.name+'","'+bourseM.symbol+'")', (err, result) => {});
}*/
//https://api.iextrading.com/1.0/stock/aapl/stats
/*peRatioHight,peRatioLow,profitMargin,week52hight,week52low,week52change,shortDate,dividendRate,dividendYield,EBITDA,revenue,grossprofit,cash,priceToSale,spriceToBook,institutionPercent,insiderPercent,shortRatio,year5ChangePercent,year2ChangePercent,year1ChangePercent,ytdChangePercent,month6ChangePercent,month3ChangePercent,month1ChangePercent,day5ChangePercent,marketcap*/

//await wait(500); dividends
/*for (let i in JsonNasdaq) {
    let urlDiv = "https://api.iextrading.com/1.0/stock/"+JsonNasdaq[i]["symbol"]+"/dividends/5y";
    fetch('https://davidwalsh.name/demo/arsenal.json').then(function(response) {
        // Convert to JSON
        return response.json();
    }).then(function(j) {
        // Yay, `j` is a JavaScript object
        console.log(j);
    });
}*/

//keystats
/*const url =
  "https://api.iextrading.com/1.0/stock/FB/stats/";
fetch(url)
  .then(response => {
    response.json().then(json => {
      console.log(
       json
      );
    });
  })
  .catch(error => {
    console.log(error);
  });*/

for (let i in JsonNasdaq) {
    
this.timeout =10;
    setTimeout(() => {
        let urlKeyStats = "https://api.iextrading.com/1.0/stock/" + JsonNasdaq[i]["symbol"] + "/stats/";
       // console.log(urlKeyStats);
        fetch(urlKeyStats).then(response => {
            response
                .json()
                .then(j => {
                    //console.log(j);
                    // Yay, `j` is a JavaScript object console.log(j);
                    connection.query('INSERT INTO keyStats (id_symbolNasdaq,peRatioHigh,peRatioLow,profitMargin,week52high,week52low,' +
                            'week52change,shortDate,priceToBook,dividendYield,EBITDA,revenue,grossProfit,cash' +
                            ',priceToSales,dividendRate,institutionPercent,insiderPercent,month1ChangePercent,day5ChangePercent,shortRatio,year5ChangePercent' +
                            ',year2ChangePercent,year1ChangePercent,ytdChangePercent,month6ChangePercent' +
                            ',month3ChangePercent,marketcap) VALUES' +
                            '("' + j.symbol + '","' + j.peRatioHigh + '","' + j.peRatioLow + '","' + j.profitMargin + '","' + j.week52high + '","' + j.week52low + '","' + j.week52change + '","' + j.shortDate + '","' + j.priceToBook + '","' + j.dividendYield + '","' + j.EBITDA + '","' + j.revenue + '","' + j.grossProfit + '","' + j.cash + '","' + j.priceToSales + '","' + j.dividendRate + '","' + j.institutionPercent + '","' + j.insiderPercent + '","' + j.month1ChangePercent + '","' + j.day5ChangePercent + '","' + j.shortRatio + '","' + j.year5ChangePercent + '","' + j.year2ChangePercent + '","' + j.year1ChangePercent + '","' + j.ytdChangePercent + '","' + j.month6ChangePercent + '","' + j.month3ChangePercent + '", "' + j.marketcap + '")', (err, result) => {});
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }, this.timeout*i );

    // Import socket.io with a connection to a channel (i.e. tops)
    /*const socket = require('socket.io-client')('https://ws-api.iextrading.com/1.0/stock/'+JsonNasdaq[i]['symbol']+'/stats');

// Listen to the channel's messages
socket.on('message', message => console.log(message))

// Connect to the channel
socket.on('connect', () => {

  // Subscribe to topics (i.e. appl,fb,aig+)
  socket.emit('subscribe', 'snap,fb,aig+')

  // Unsubscribe from topics (i.e. aig+)
  socket.emit('unsubscribe', 'aig+')
})*/

    // Disconnect from the channel socket.on('disconnect', () =>
    // console.log('Disconnected.'))

}

/*for (let i in JsonNasdaq) {
    let urlDiv = "https://api.iextrading.com/1.0/stock/"+JsonNasdaq[i]["symbol"]+"/dividends/5y";

    /*connection.query('INSERT INTO dividends (amount,exDate,paymentDate,qualified,recordDate,type) VALUES("'+bourseM.name+'","'+bourseM.symbol+'")', (err, result) => {});*/
//}

/*
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})*/

/*app.get('/ping', function(req, res) {
    return res.send('pong');
});*/

/*const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function(req, res) {
    return res.send('pong');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);*/