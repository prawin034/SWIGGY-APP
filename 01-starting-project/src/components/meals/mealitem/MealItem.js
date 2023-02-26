import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { cartactions } from '../../../store/cart-slice';
import { useDispatch } from 'react-redux';
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const dispatch = useDispatch();
  const addtocarthandler = (amount) => {
    dispatch(
      cartactions.addItemToCart({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      })
    );
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onaddtocart={addtocarthandler} />
      </div>
    </li>
  );
};

export default MealItem;
