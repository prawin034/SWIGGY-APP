import Input from '../../ui/Input';
import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';
const MealItemForm = (props) => {
  const amountinputref = useRef();
  const [amountvalid, setamountvalid] = useState(true);
  const submithandler = (event) => {
    event.preventDefault();

    const enteredamount = amountinputref.current.value;
    const enteramountnumber = +enteredamount;

    if (
      enteredamount.trim().length === 0 ||
      (enteramountnumber < 1 && enteramountnumber > 1)
    ) {
      setamountvalid(false);
      return;
    }

    props.onaddtocart(enteramountnumber);
  };
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <Input
        label="amount"
        ref={amountinputref}
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ ADD</button>
      {!amountvalid && <p>please enter valid amount 1 to 5</p>}
    </form>
  );
};
export default MealItemForm;
