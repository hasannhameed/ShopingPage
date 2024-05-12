import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../Store/cart-contex';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // Calculate total amount
  const totalAmount = cartCtx.items.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0).toFixed(2);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li key={item.id} className={classes['cart-item']}>
          <table>
            <thead>
              <tr>
                <th>Name:</th>
                <th>Price:</th>
                <th>Quantity:</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className={classes['item-name']} style={{ backgroundColor: 'aliceblue' }}>{item.name}</span></td>
                <td><span className={classes['item-price']} style={{ backgroundColor: 'aliceblue' }}>{item.price}</span></td>
                <td><span className={classes['item-quantity']} style={{ backgroundColor: 'aliceblue' }}>{item.quantity}</span></td>
                <td><span className={classes['item-size']} style={{ backgroundColor: 'aliceblue' }}>{item.size}</span></td>
              </tr>
            </tbody>
          </table>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total} >
        <span style={{ backgroundColor: 'aliceblue' }}>Total Amount</span>
        <span style={{ backgroundColor: 'aliceblue' }}>${totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
