import { useState } from 'react';
import classes from './AvalableItems.module.css'; // Import the CSS file
import ProductItem from '../Product/ProductItem/ProductItem';
import Card from '../UI/Card';
import AddItemForm from './AvalableItemsForm'; // Import the AddMealForm component

const DUMMY_ITEMS = [
  {
    id: 'm1',
    name: 'Polo T-shirt',
    description: 'Cotton made',
    price: 22.99,
    size: 'M'
  },
  {
    id: 'm2',
    name: 'Denim Jeens',
    description: 'pure jeens',
    price: 16.5,
    size: 'M'
  },
  {
    id: 'm3',
    name: 'Armani shirt',
    description: 'confortable',
    price: 12.99,
    size: 'M'
  },
  {
    id: 'm4',
    name:'denim shirt', 
    description:'Pure Luxury',
    price : 20.00,
    size:'L'
  },
];

const AvalableItems = () => {
  const [items, setitem] = useState(DUMMY_ITEMS);

  const additemHandler = (newItems) => {
    setitem((prevItems) => [...prevItems, newItems]);
  };

  const itemsList = items.map((item) => (
    <ProductItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      size={item.size}
    />
  ));

  return (
    <section className={classes.meals}> {/* Apply the class from CSS */}
      <Card>
        <AddItemForm onAddItems={additemHandler} /> {/* Add the AddMealForm component */}
        <ul className={classes.ul}>{itemsList}</ul> {/* Apply the class for the ul */}
      </Card>
    </section>
  );
};

export default AvalableItems;
