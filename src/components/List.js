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
            <div id="incomes-List">
                <h2>Incomes</h2>
                {listOfIncomes}
            </div>
            <div id="expenses-list">
                <h2>Expenses</h2>
                {listOfExpenses}
            </div>
        </div>
    )
}

export default List;