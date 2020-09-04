import React from 'react';

const Overview = (props) =>{
    return(
        <div id="overview">
            <h1>Balance: {props.balance}$</h1>
            <div>
                <div id="incomes-OV" className="partial-list">
                    <h2>Income</h2>
                    <h2>{props.totalIncomes}$</h2>
                </div>
                <div id="expenses-OV" className="partial-list">
                    <h2>Expenses</h2>
                    <h2>{props.totalExpenses}$</h2>
                </div>
            </div>   
        </div>
    )
}

export default Overview;