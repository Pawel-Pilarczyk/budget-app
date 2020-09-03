import React from 'react';

const List = (props) =>{

    const listOfExpenses= props.expensesList.map(x =>{
        return(
            <ul>
                <li>Quote: {x.ammount}$</li>
                <li>Type: {x.type}</li>
                <li>Date: {x.date}</li>
            </ul>
        )
    })

    const listOfIncomes = props.incomesList.map(x =>{
        return(
            <ul>
                <li>Quote: {x.ammount}$</li>
                <li>Type: {x.type}</li>
                <li> Date: {x.date}</li>
            </ul>
        )
    })
    return(
        <div id="list">
            <h1>Blance: {props.balance}$</h1>
            <div>
                <div id="incomes-list" className="partial-list">
                    <h2>Income</h2>
                    <h2>{props.totalIncomes}$</h2>
                    {listOfIncomes}
                </div>
                <div id="expenses-list" className="partial-list">
                    <h2>Expenses</h2>
                    <h2>{props.totalExpenses}$</h2>
                    {listOfExpenses}
                </div>
            </div>   
        </div>
    )
}

export default List;