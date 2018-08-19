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
    let self = this;
    fetch('/search', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({users: data});
    }).catch(err => {
    console.log('caught it!',err);
    })

    
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
