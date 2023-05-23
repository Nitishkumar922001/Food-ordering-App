import Input from '../UI/Input'
import classes from './MealItem.module.css'
import MealFormClasses from './MealItemForm.module.css'
let meal;
function MealItem(props)
{meal={...props.meal}
const price=`$ ${meal.price.toFixed(2)}`
return<li className={classes.meal}>
    <div>
    <div><h3>{meal.name}</h3></div>
    <div className={classes.discription}>{meal.description}</div>
    <div className={classes.price}>{price}</div>
    </div>
    <div ><MealItemForm/></div>
</li>


}
export default MealItem;

function MealItemForm(props){
//    const meal={...props.meal}
   console.log(meal);
    return(
        <form className={MealFormClasses.form}>
            <Input label={`Amount`} input={{id:meal.id,type:"text",min:1,max:5,step:1, defaultValue:1}}/>
            <button>+ Add</button>
        </form>
    )
}