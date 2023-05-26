import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
function   Header(props)
{
return <header>
    <nav className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick}/>
    </nav>
    <div className={classes['main-image']}>
            <img src={mealsImage}  alt="table full of delicious food!" />
    </div>
</header>


}
export default Header;