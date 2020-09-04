import React from "react";

const Header = (props) =>{
    return(
        <div id="header">
            <button id="menu-btn" onClick={props.menuOption}>MENU</button>
            <h2>Account: USER</h2>
            <div>
                <button id="add-income-btn" onClick={props.addIncomePopUp}>+ Income</button>
                <button id="add-expense-btn" onClick={props.addExpensePopUp}>- Expense</button>
            </div>
            
        </div>
    )
}

export default Header;