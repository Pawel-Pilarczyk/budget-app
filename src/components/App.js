import React from 'react';
import Header from './Header'
import Menu from './Menu';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';
import { render } from '@testing-library/react';

const date = new Date;

class NewIncome{
  constructor(ammount,type){
    this.ammount = ammount;
    this.type = type;
    this.date = `${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`;
  }
};

class NewExpense{
  constructor(ammount,type){
    this.ammount = ammount;
    this.type = type;
    this.date = `${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`;
  }
};

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Expenses: [],
      Incomes: [],
    };

    this.hideMenu = this.hideMenu.bind(this);
    this.hideAddIncome = this.hideAddIncome.bind(this);
    this.hideAddExpense = this.hideAddExpense.bind(this);
    this.addNewIncome = this.addNewIncome.bind(this);
    this.addNewExpense = this.addNewExpense.bind(this);
  
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

  addNewIncome(e){
    e.preventDefault();
    const newAmmount = document.getElementById('ammount').value;
    const typeOfIncome = document.getElementById('typeOfIncome').value;
    const newIncome = new NewIncome(newAmmount,typeOfIncome);

    this.setState({Incomes:[...this.state.Incomes, newIncome]});

    document.getElementById('ammount').value = "";
  };

  addNewExpense(e){
    e.preventDefault();
    const newAmmountEx = document.getElementById('ammountExpense').value;
    const typeOfExpense = document.getElementById('typeOfExpense').value;
    const newExpense = new NewExpense(newAmmountEx,typeOfExpense);

    this.setState({Expenses:[...this.state.Expenses, newExpense]});

    document.getElementById('ammountExpense').value = "";
  };

  render(){
    return (
      <div className="App">
        <Header menuOption ={this.hideMenu} addIncomePopUp={this.hideAddIncome} addExpensePopUp={this.hideAddExpense}/>
        <Menu/>
        <AddIncome addIncomeFunction={this.addNewIncome}/>
        <AddExpense addExpenseFunction={this.addNewExpense}/>
      </div>
    );
  }
  
}

export default App;
