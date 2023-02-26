import Cart from '../ui/Cart';
import classes from './AvailableMeals.module.css';
import MealItem from './mealitem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 20,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 30.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 15,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 50,
  },
];

const AvailableMeals = () => {
  const mealslist = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      price={meal.price}
      name={meal.name}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Cart>
        <ul>{mealslist}</ul>
      </Cart>
    </section>
  );
};

export default AvailableMeals;
