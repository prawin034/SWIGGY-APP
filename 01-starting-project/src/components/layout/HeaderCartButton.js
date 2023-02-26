import classes from './HeaderCartButton.module.css';
import { BsCart } from 'react-icons/bs';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const HeaderCartButton = (props) => {
  const dispatch = useDispatch();
  const [btnbump, setbtnbump] = useState(false);
  const showhandler = () => {
    dispatch(uiActions.toggle());
  };

  const carditems = useSelector((state) => state.cartslice.items);

  const badge = useSelector((state) => state.cartslice.totalQuantity);

  const btnclasses = `${classes.button} ${btnbump ? classes.bump : ''}`;

  useEffect(() => {
    if (carditems.length === 0) {
      return;
    }
    setbtnbump(true);

    const timer = setTimeout(() => {
      setbtnbump(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [carditems]);
  return (
    <button onClick={showhandler} className={btnclasses}>
      <span className={classes.icon}>
        <BsCart size={20} />
      </span>
      <span>YOUR CART</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default HeaderCartButton;
