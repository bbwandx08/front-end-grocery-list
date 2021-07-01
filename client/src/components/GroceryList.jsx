import React from 'react';
import GroceryItem from './GroceryItem.jsx';


var GroceryList = (props) => (

    <div>
      {props.list.map((item, index) =>
        <GroceryItem item={item}
          key={index}
        />
      )}
    </div>

)



export default GroceryList;