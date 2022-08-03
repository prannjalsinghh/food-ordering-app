import { useContext,useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import './cart.css'

const Cart = (props) => {

  const [ordered, setOrdered]= useState(false);
  const [emptyCart, emptyCartHandler] = useState(false);

  const CartCtx= useContext(CartContext);
  const CartItemRemoveHandler = id =>{
    CartCtx.removeItem(id);
    console.log(CartCtx.totalAmount);
  }
  const CartAddItemHandler = item =>{
    CartCtx.addItem(item);
  }

  const orderFood = ()=>{
    setOrdered(true);
    emptyCartHandler(true);

  }
  


  const cartItems = (

    

    <ul className={classes['cart-items']}>
      {CartCtx.items.map((item) => (
        <CartItem name={item.name} amount={item.amount} price={item.price} onRemove={CartItemRemoveHandler.bind(null,item.id)} onAdd={CartAddItemHandler.bind(null,item)} />
      ))}
    </ul>
  );

  const orderedPage = (
    <div>
      <p className='text'>Food order Placed for:</p>
      <br/>
      <img  id="doneimg" src='https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif' />
      <p id='doneAmount'>Total Amount to be Paid: {CartCtx.totalAmount.toFixed(2)}</p>
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {!ordered ? 
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{`$${CartCtx.totalAmount.toFixed(2)}`}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button} onClick={orderFood}>Order</button>
        </div>
        </div> : <div>{orderedPage}</div>
      }
      
    </Modal>
  );
};

export default Cart;