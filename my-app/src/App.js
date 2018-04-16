import React, {Component} from 'react';
import Filtres from './filtres';
import MyDashboard from './myDashboard';
/* var mysql = require('mysql');
 var express = require('express');
var app = express();*/



class App extends Component {

  constructor() {
    super();



var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'greenStox'
});
 

// Listen to POST requests to /users.
app.post('/serve', function(req, res) {
  // Get sent data.
  var user = req.body;
  // Do a MySQL query.
  var query = connection.query('INSERT INTO users SET ?', user, function(err, result) {
    // Neat!
  });
  res.end('Success');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
  /*  var connection = mysql.createConnection({host: 'localhost', user: 'root', password: '', database: 'greenStox'});

    connection.connect()

    connection.query('SELECT * from finance', function (err, rows, fields) {
      if (err) 
        throw err

      console.log('The solution is: ', rows[0].solution)
    })

    connection.end()
*/
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to GreenStock</h1>
        </header>
        {/*<MyDashboard/>*/}
        <Filtres/>
      </div>
    );
  }
}

export default App;
