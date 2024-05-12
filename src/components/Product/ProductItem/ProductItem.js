import classes from './ProductItem.module.css';
import ProductItemForm from '../../Layout/ProductItemForm';

const ProductItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{price}</td>
            <td>{props.size}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <ProductItemForm id={props.id} item={props} />
      </div>
    </li>
  );
};

export default ProductItem;
