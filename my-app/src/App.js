import React, {Component} from 'react';
import Filtres from './filtres';
/*import MyDashboard from './myDashboard';
*/
import MyStocks from './MyStocks';
//import './App.css';

class App extends Component {

  constructor() {
    super();

    this.handleSubmit = this
      .handleSubmit
      .bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    var data = {
      name: this.state.name,
      email: this.state.email
    }
    console.log(data)
    fetch("/routes/search", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(data)
      })
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        if (data == "success") {
          this.setState({msg: "Thanks for registering"});
        }
      })
      .catch(function (err) {
        console.log(err)
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to GreenStock</h1>
        </header>
        {/*<MyDashboard/>*/}
        <Filtres/>
        <MyStocks/>
      </div>
    );
  }
}

export default App;
