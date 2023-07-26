import React from "react";

function FoodBox({ food, deleteFood }) {
    return (
        <div>
            <div key={food.id}>
                <h3>{food.name}</h3>

                <img
                    src={food.image}
                    alt={food.name}
                    style={{ height: "100px" }}
                />

                <p> Calories: {food.calories}</p>
                <p> Servings: {food.servings}</p>

                <p>
                    <b>Total Calories: {food.servings * food.calories} </b>
                    kcal
                </p>

                <button onClick={() => deleteFood(food.id)}>Delete</button>
                <hr></hr>
            </div>
        </div>
    );
}

export default FoodBox;
