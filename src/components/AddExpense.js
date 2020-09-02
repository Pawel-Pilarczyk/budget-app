import React from 'react';

const AddExpense = (props)=>{
  return(
      <div id="add-expense" className="pop-up">
        <form onSubmit={props.addExpenseFunction}>
            <input type="number" id="ammountExpense" required></input>
            <select id="typeOfExpense" name="typeOfExpense" required>
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