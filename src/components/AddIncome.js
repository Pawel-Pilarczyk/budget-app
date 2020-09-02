import React from 'react';

const AddIncome = ()=>{
  return(
      <div id="add-income" className="pop-up">
        <form>
            <input type="number" required></input>
            <select id="typeOfIncome" name="typeOfIncome" required>
                <option value="Work">Work</option>
                <option value="Side Hussle">Side Hussle</option>
                <option value="Bonus">Bonus</option>
                <option value="Investment">Investment</option>
                <option value="other">Other</option>
            </select>
            <input type="submit"></input>
        </form>
      </div>
  )   
}

export default AddIncome;