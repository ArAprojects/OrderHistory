import React, { Component } from 'react';
import './NewItem.css';

class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      name: '',
      description: '',
      price: '',
      id: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }


  addItem = event => {
   event.preventDefault();
   this.props.addItem(this.state);
 }

  render() {
    return (
      <form>
          <h2>Add a new Item!</h2>
        <input
          type='text'
          placeholder='Item Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='price'
          name='price'
          value={this.state.price}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='img URL'
          name='img'
          value={this.state.img}
          onChange={event => this.handleChange(event)}
        />

         <button onClick={event => this.addItem(event)}>SUBMIT</button>
      </form>
    )
  }
}

export default NewItem;
