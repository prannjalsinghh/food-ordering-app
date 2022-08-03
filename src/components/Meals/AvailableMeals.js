import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect,useState } from 'react';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {

  const [meals,setMeals]= useState([{id:1,name:"hey",description:"hey",price:20}]);
  // const [isLoading, setIsLoading] = useState((true));
  // const [httperror, sethttpError] =useState();

  // useEffect(()=>{
  //   const responseFn = async() =>{
  //     const response = await fetch('https://react-http-8d719-default-rtdb.firebaseio.com/meals')
  //     const responseData =await response.json();

  //     if(!response.ok){
  //       throw new Error('something went wrong!')
  //     }

  //     const MealsData = [];
  //     for(const key in responseData){
  //       MealsData.push({
  //         id:key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price:responseData[key].price
  //       })
  //     }
  //     setMeals(MealsData);
  //     setIsLoading(false);
  //   }
  //   responseFn().catch((err)=>{
  //     setIsLoading(false);
  //     sethttpError(err.message);
  //   });
    
  // },[])

//  if(isLoading){
//     return (
//       <section className={classes.loadingMeals}>
//         <p>Loading..</p>
//       </section>
//     )
//  }
//  if(httperror){

//   return (
//   <section className={classes.failedMeals}>
//   <p>{httperror}</p>
//   </section>
//   )
//  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;