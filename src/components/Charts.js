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
    })

    const chartDataIncome = {
        labels:['Work','Side Hussle','Bonus','Investment','Other'],
        datasets: [{
            label: '# of Votes',
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
            label: '# of Votes',
            //data: labels,
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
        <div>
            <Bar
                data={chartDataIncome}
                width={150}
                height={250}
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
    )
}
export default Chart;