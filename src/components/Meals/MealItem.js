import Input from "../UI/Input";
import classes from "./MealItem.module.css";
import MealFormClasses from "./MealItemForm.module.css";
import { useContext, useRef } from "react";
import CartCxt from "../../Store/CartCxt";

function MealItem(props) {
  const meal = { ...props.meal };
  const price = `$ ${meal.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{meal.name}</h3>
        </div>
        <div className={classes.discription}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm meals={meal} />
      </div>
    </li>
  );
}
export default MealItem;

function MealItemForm(props) {
  const meal = { ...props.meals };
  const Cartcxt = useContext(CartCxt);
  const amountRef = useRef();

  function addItem(event) {
    event.preventDefault();
    const amount = amountRef.current.value;
    Cartcxt.addItem({ ...meal, amount });
  }

  return (
    <form className={MealFormClasses.form}>
      <Input
        ref={amountRef}
        label={`Amount`}
        input={{
          id: meal.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button onClick={addItem}>+ Add</button>
    </form>
  );
}
