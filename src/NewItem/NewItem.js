import React, { Component } from 'react';
import './NewItem.css';

class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      price: '',
      img: "https://image.freepik.com/free-vector/modern-new-arrival-composition-with-realistic-design_23-2147885434.jpg",
      id: Date.now()
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  cleanInputs = () => {
   this.setState({ name: '', description: '', price: ''});
 }


  submitItem = event => {
   event.preventDefault();
   this.cleanInputs()
   this.props.newItem(this.state);
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
          placeholder='IMG: Leave empty for default img!'
          name='img'
          value={this.state.img}
          onChange={event => this.handleChange(event)}
           />

           <label for="img">Keep default img or add your own URL!</label>

          <button onClick={event => this.submitItem(event)}>SUBMIT</button>
      </form>
    )
  }
}

export default NewItem;
