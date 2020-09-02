import React from 'react';

const AddExpense = ()=>{
  return(
      <div id="add-expense" className="pop-up">
        <form>
            <input type="number" required></input>
            <select id="typeOfIncome" name="typeOfIncome" required>
                <option value="Rent">Rent</option>
                <option value="Bills">Bills</option>
                <option value="Car">Car</option>
                <option value="Food">Food</option>
                <option value="Eating Out">Eating Out</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            <input type="submit"></input>
        </form>
      </div>
  )   
}

export default AddExpense;