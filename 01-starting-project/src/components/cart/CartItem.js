import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartactions } from '../../store/cart-slice';
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const totalprice = `$${props.totalprice.toFixed(2)} `;

  const dispatch = useDispatch();
  const cartremovehandler = () => {
    dispatch(cartactions.removeItemCart(props.id));
  };
  const cartaddhandler = () => {
    dispatch(
      cartactions.addItemToCart({
        id: props.id,
        name: props.name,

        price: props.price,
      })
    );
  };
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{props.amount} </span>
          <span> = </span>

          <span className={classes.amount}>{totalprice} </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={cartremovehandler}>−</button>
        <button onClick={cartaddhandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
