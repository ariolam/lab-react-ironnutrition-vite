import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
    const [foods, setFoods] = useState(foodsJson);

    const deleteFood = (foodId) => {
        const filteredFoods = foods.filter((filterFood) => {
            if (filterFood.id !== foodId) {
                return true;
            }
        });
        console.log("filtered foods", filteredFoods);
        setFoods(filteredFoods);
    };

    //function receives one argument, a newFood object to be added
    const addFood = (newFood) => {
        // add the newFood to the foods array and create a new array to avoid mutating the state
        const updatedFoods = [...foods, newFood];
        console.log("updated foods", updatedFoods);
        setFoods(updatedFoods);
    };

    return (
        <div className="App">
            <h1> Add Food Entry</h1>
            <AddFoodForm addFood={addFood} />
            <h1> Food List</h1>
            {foods.map((food) => {
                return (
                    <FoodBox
                        key={food.id}
                        food={food}
                        deleteFood={deleteFood}
                    />
                );
            })}
        </div>
    );
}

export default App;
