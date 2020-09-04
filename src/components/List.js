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
            <div>
                <div id="incomes-list" className="partial-list">
                    {listOfIncomes}
                </div>
                <div id="expenses-list" className="partial-list">
                    {listOfExpenses}
                </div>
            </div>   
        </div>
    )
}

export default List;