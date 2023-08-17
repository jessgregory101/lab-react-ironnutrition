import './App.css';
import foods from "./foods.json";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App () {
  const [ foodList, setFoodList ] = useState(foods);
  const [ filteredFoodList, setFilteredFoodList ] = useState(foods);

  const addNewFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  }
  
  const handleSearch = (query) => {
    if (query === "") {
      setFilteredFoodList(foodList);
    } else {
      const filteredFoods = foodList.filter(food =>
        food.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFoodList(filteredFoods);
    }
  };

  const handleDelete = (deletedFood) => {
    const updatedFoodList = foodList.filter(food => food !== deletedFood);
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList);
  };

  return (
    <div className="App">
    <AddFoodForm onAddFood={addNewFood} /> 
    <Search onSearch={handleSearch} />
    {filteredFoodList.map((food) => (
        <FoodBox key={uuidv4()} food={food} onDelete={handleDelete}/>
      ))}
    </div>
  );
}

export default App;