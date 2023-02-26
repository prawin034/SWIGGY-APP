import classes from './Header.module.css';
import React, { Fragment } from 'react';
import mealimg1 from '../assets/mealimg3.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SWIGGY </h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealimg1} alt="A BRIYANI IMG RECIEPES" />
      </div>
    </Fragment>
  );
};

export default Header;
