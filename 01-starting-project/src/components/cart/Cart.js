import Modal from '../ui/Modal';
import classes from './Cart.module.css';
import { uiActions } from '../../store/ui-slice';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem';

const Cart = (props) => {
  const carditems = useSelector((state) => state.cartslice.items);
  const totalamount = useSelector((state) => state.cartslice.totalAmount);

  const hasitems = carditems.length > 0;
  const cartitems = (
    <ul className={classes['cart-items']}>
      {carditems.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          totalprice={item.totalprice}
          amount={item.quantity}
        />
      ))}
    </ul>
  );
  console.log(carditems);

  const dispatch = useDispatch();

  const closehandler = () => {
    dispatch(uiActions.toggleclose());
  };
  return (
    <Modal oncloseCart={props.oncloseCart}>
      {cartitems}
      <div className={classes.total}>
        <span>TotalAmount</span>
        <span>{totalamount}rs</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closehandler} className={classes['button--alt']}>
          CLOSE
        </button>
        {hasitems && <button className={classes.button}>ORDER..</button>}
      </div>
    </Modal>
  );
};

export default Cart;
