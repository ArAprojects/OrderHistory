import React, { Component } from 'react';
import Card from '../Card/Card'
import NewItem from '../NewItem/NewItem'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      purchases: [],
    }
  }


componentDidMount(){
  fetch("http://localhost:3001/api/v1/purchases").then(res => res.json()).then(data => this.setState({purchases: data}))
}

newItem = (newCard) => {
  this.setState({purchases: [...this.state.purchases, newCard]})
}

deleteItem = (id) => {
  const remainingItems = this.state.purchases.filter(item => item.id !== id);
  this.setState({ purchases: remainingItems });
}


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
          </div>
        </header>
        <NewItem newItem = {this.newItem}/>
        <div className='purchase-container'>
          <Card purchaseData = {this.state.purchases} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;
