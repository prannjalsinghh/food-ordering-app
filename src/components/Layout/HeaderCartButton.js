import { useContext,useEffect,useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const CartCtx = useContext(CartContext);
    const numberOfCartItems = CartCtx.items.reduce((curNum,item)=>{
        return curNum + item.amount;
    },0);
    const { items } = CartCtx;

    const [buttonHighlight,isHighlighted] =  useState(false);
    const buttonClasses = `${classes.button} ${buttonHighlight ? classes.bump : ''}`;

    useEffect(()=>{
      if(items.length===0){
        return;
      }
      isHighlighted(true);
      const timer = setTimeout(()=>{
        isHighlighted(false);
      },300)

      return () =>{
        clearTimeout(timer);
      }
    },[items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;