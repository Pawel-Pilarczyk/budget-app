import React,{Component} from "react";
import {Pie,Bar} from 'react-chartjs-2';


const Chart = (props) =>{
    let incomeWork = 0;
    let incomeSideHussle = 0;
    let incomeBonus = 0;
    let incomeInvestment = 0;
    let incomeOther = 0;
    props.income.map(x  => {
        if(x.type == "Work"){
            incomeWork+= parseFloat(x.ammount);
        }else if(x.type == "Side Hussle"){
            incomeSideHussle+= parseFloat(x.ammount);
        }else if(x.type == "Bonus"){
            incomeBonus+= parseFloat(x.ammount);
        }else if(x.type == "Investment"){
            incomeInvestment+= parseFloat(x.ammount);
        }else if(x.type == "other"){
            incomeOther+= parseFloat(x.ammount);
        }
    });

    let expenseRent = 0;
    let expenseBills = 0;
    let expenseCar = 0;
    let expenseFood = 0;
    let expeseEO = 0;
    let expenseEntert = 0;
    props.expenses.map(x  => {
        if(x.type == "Rent"){
            expenseRent+= parseFloat(x.ammount);
        }else if(x.type == "Bills"){
            expenseBills+= parseFloat(x.ammount);
        }else if(x.type == "Car"){
            expenseCar+= parseFloat(x.ammount);
        }else if(x.type == "Food"){
            expenseFood+= parseFloat(x.ammount);
        }else if(x.type == "Eating Out"){
            expeseEO+= parseFloat(x.ammount);
        }else if(x.type == "Entertainment"){
            expenseEntert+= parseFloat(x.ammount);
        }
    });

    const chartDataIncome = {
        labels:['Work','Side Hussle','Bonus','Investment','Other'],
        datasets: [{
            label: '$ Ammounts of income',
            data: [incomeWork,incomeSideHussle,incomeBonus,incomeInvestment,incomeOther],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }],
    }

    const chartDataExpenses = {
        labels:['Rent','Bills','Car','Food','Eating Out','Entertainment'],
        datasets: [{
            label: '$ Ammount of expenses',
            data: [expenseRent,expenseBills,expenseCar,expenseFood,expeseEO,expenseEntert],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
    }


    return(
        <div id="charts">
            <div id="barChartIncome" className="chartDiv">
                <h2>Bar Chart Income</h2>
                <Bar
                    data={chartDataIncome}
                    width={150}
                    height={200}
                    options={{ 
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                /> 
            </div>
            <div id="barChartExpense" className="chartDiv">
                 <h2>Bar Chart Expenses</h2>
                <Bar
                    data={chartDataExpenses}
                    width={150}
                    height={200}
                    options={{ 
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                /> 
            </div> 
            <div id="pieChartIncome" className="chartDiv">
                <h2>Pie Chart Income</h2>
                <Pie
                    data={chartDataIncome}
                    width={150}
                    height={200}
                    options={{ 
                        maintainAspectRatio: false,
                    }}
                /> 
            </div>
            <div id="pieChartExpenses" className="chartDiv">
                <h2>Pie Chart Expenses</h2>
                <Pie
                    data={chartDataExpenses}
                    width={150}
                    height={200}
                    options={{ 
                        maintainAspectRatio: false,
                    }}
                /> 
            </div>
        </div>
        
    )
}
export default Chart;