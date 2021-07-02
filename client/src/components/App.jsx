import React from 'react';

import groceriesData from '../data/groceriesData.js';
import GroceryList from './GroceryList.jsx';
import GroceryItem from './GroceryItem.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      someGrocery: groceriesData,
      itemName: '',
      quantity: ''
    };

    this.updateList = this.updateList.bind(this);
    this.submitList = this.submitList.bind(this);
  }

  updateList(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  submitList(e) {
    e.preventDefault();
    var newItem = {
      name: this.state.itemName,
      quantity: this.state.quantity
    }

    this.setState({
      someGrocery: [...this.state.someGrocery, newItem],
      itemName: '',
      quantity: ''
    })
  }


  render() {
    return (
  <div>
    <img src="grocery-bags.png" />
    <h1>Grocery List</h1>
    <form onSubmit={this.submitList}>
      <label> Item
        <input
        name="itemName"
        value={this.state.itemName}
        onChange={this.updateList}
        />
      </label>

      <label> Quantity
        <input
          name="quantity"
          value={this.state.quantity}
          onChange={this.updateList}
          />
      </label>

      <button>Add Grocery</button>
      <ul className="groceries">
        <GroceryList list={this.state.someGrocery} />

      </ul>
    </form>
  </div>
    )
  }
};


export default App;


// const App = () => (
//   <div>
//     <img src="grocery-bags.png" />
//     <h1>Grocery List</h1>
//     <form>
//       <label> Item
//         <input name="item" value="" />
//       </label>
//       <label> Quantity
//         <input name="quantity" value="" />
//       </label>
//       <button>Add Grocery</button>
//       <ul className="groceries">
//         <li>
//           <span>apples - </span>
//           <span>4</span>
//         </li>
//         <li>
//           <span>bread - </span>
//           <span>2</span>
//         </li>
//         <li>
//           <span>etc...</span>
//         </li>
//       </ul>
//     </form>
//   </div>
// );