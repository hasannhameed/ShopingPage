import  classes from './ProductItemForm.module.css'
import Input from '../UI/Input';
import CartContext from '../Store/cart-contex';
import React,  { useContext } from 'react';


const ProductItemForm = (props) => {
    const cartctnx = useContext(CartContext);
    console.log("reinitializing cartCntx", cartctnx);
    const addItemToCart = (event) =>{
        event.preventDefault();
        //update the cartcntx.items
        const quantity = document.getElementById('amount'+props.id).value
         cartctnx.addItem({...props.item,quantity:quantity})
        console.log('after addItemsToCart',CartContext);
        
    }
    return <form classes = {classes.form}>
        {console.log(cartctnx)}
         <Input
          label="Amount" input={{
            id: 'amount'+props.id,
            type:'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
         }}/>
        <button className={classes.button} onClick={addItemToCart}>Buy</button>
    </form>
}

export default ProductItemForm;