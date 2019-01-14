import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney'

class CreateItem extends Component {
    state = {
        title: '',
        description: '',
        image: '',
        largeImage: '',
        price: 0
    }

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        console.log({ name, type, value })
        this.setState({[name]: val})
        console.log(e.target.value)
    }

    render() {
        return (
           <Form>
               <h2>Sell an item</h2>
               <fieldset>
                   <label htmlFor="title">
                    Title
                        <input type="text" id="title" name="title" placeholder="Title" required 
                        value={this.state.title}
                        onChange={this.handleChange}
                        />
                   </label>
                   <label htmlFor="price">
                   Title
                       <input type="number" id="price" name="price" placeholder="Price" required 
                       value={this.state.price}
                       onChange={this.handleChange}
                       />
                  </label>
               </fieldset>
           </Form>
        );
    }
}

export default CreateItem;