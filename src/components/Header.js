import React from "react";

const Header = (props) =>{
    return(
        <div id="header">
            <button id="menu-btn" onClick={props.menuOption}>MENU</button>
            <h2>Account: </h2>
            <div>
                <button id="add-income">+ Income</button>
                <button id="add-expense">- Expense</button>
            </div>
            
        </div>
    )
}

export default Header;