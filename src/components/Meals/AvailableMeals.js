import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import { useEffect, useState } from "react";

let meals = [];

function AvailableMeals() {
  const [mealsList, setMealsList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState();
  const fetchData = async () => {
    try {
      setisLoading(true);
      const response = await fetch(
        "https://food-ordering-app-85771-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      // console.log(data);
      for (let key in data) {
        meals.push(data[key]);
      }
      setMealsList(meals);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      setError(error.message);
    }
  };

  const availabelmeals = mealsList.map((meal, index) => {
    return <MealItem key={index} meal={{ ...meal }} />;
  });

  useEffect(() => {
    fetchData(setMealsList);
  }, []);

  if (isLoading) {
    return <h1 className={classes.loading}>...Loading</h1>;
  }
  if (error) {
    return <h3 className={classes.error}>{error}</h3>;
  }
  return (
    <section className={classes.meals}>
      <Card>
        <ul> {availabelmeals}</ul>
      </Card>
    </section>
  );
}
export default AvailableMeals;
