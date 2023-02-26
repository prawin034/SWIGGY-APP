import { Fragment } from 'react';
import Cart from './components/cart/Cart';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';

import { useSelector } from 'react-redux';
function App() {
  const cartui = useSelector((state) => state.ui.cartvisible);

  return (
    <Fragment>
      {cartui && <Cart />}
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
