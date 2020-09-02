import React from 'react';
import Header from './Header'
import Menu from './Menu';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';
import { render } from '@testing-library/react';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Incomes: [],
      Expenses:[],
    };

    this.hideMenu = this.hideMenu.bind(this);
    this.hideAddIncome = this.hideAddIncome.bind(this);
    this.hideAddExpense = this.hideAddExpense.bind(this);
  }

  menuHidden = true;
  addIncomeHidden = true;
  addExpenseHidden = true;
  
hideMenu(){
    if(this.menuHidden){
      document.getElementById('menu').style.display ="block";
      this.menuHidden = false;
    }else{
      document.getElementById('menu').style.display ="none";
      this.menuHidden = true;
    }
  };
  
  hideAddIncome(){
    if(this.addIncomeHidden){
      document.getElementById('add-income').style.display ="block";
      this.addIncomeHidden = false;
    }else{
      document.getElementById('add-income').style.display ="none";
      this.addIncomeHidden = true;
    }
  }
  
  hideAddExpense(){
    if(this.addExpenseHidden){
      document.getElementById('add-expense').style.display ="block";
      this.addExpenseHidden = false;
    }else{
      document.getElementById('add-expense').style.display ="none";
      this.addExpenseHidden = true;
    }
  };
  render(){
    return (
      <div className="App">
        <Header menuOption ={this.hideMenu} addIncomePopUp={this.hideAddIncome} addExpensePopUp={this.hideAddExpense}/>
        <Menu/>
        <AddIncome />
        <AddExpense/>
      </div>
    );
  }
  
}

export default App;
