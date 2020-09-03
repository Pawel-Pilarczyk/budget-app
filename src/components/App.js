import React from 'react';
import Header from './Header'
import Menu from './Menu';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';
import List from './List';
import Chart from './Charts';

const date = new Date;

// Creating new object which will be pushed into State -> Incomes
class NewIncome{
  constructor(ammount,type){
    this.ammount = ammount;
    this.type = type;
    this.date = `0${date.getDate()}:0${date.getMonth()}:${date.getFullYear()}`;
  }
};
// Creating new object which will be pushed into State -> Expenses
class NewExpense{
  constructor(ammount,type){
    this.ammount = ammount;
    this.type = type;
    this.date = `0${date.getDate()}:0${date.getMonth()}:${date.getFullYear()}`;
  }
};
//Creating new App component
class App extends React.Component {
  constructor(){ 
    super();
    this.state = {// Creting statest that will be passed down to components to be displayed
      Expenses: [],
      Incomes: [],
    };
    //binding functions
    this.hideMenu = this.hideMenu.bind(this);
    this.hideAddIncome = this.hideAddIncome.bind(this);
    this.hideAddExpense = this.hideAddExpense.bind(this);
    this.addNewIncome = this.addNewIncome.bind(this);
    this.addNewExpense = this.addNewExpense.bind(this);
  
  }
  // variables which will be responsible about displaying perticular parts of the APP
  menuHidden = true;
  addIncomeHidden = true;
  addExpenseHidden = true;

  //Variables resposnsible for holding data about total Incomes/Expenses/Budget
  totalIncomes = 0;
  totalExpenses = 0;
  balance = 0;

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

    document.getElementById('add-income').style.display ="none";
    this.addIncomeHidden = true;

    this.totalIncomes += parseFloat(newAmmount);
    this.balance = this.totalIncomes - this.totalExpenses;
  };

  addNewExpense(e){
    e.preventDefault();
    const newAmmountEx = document.getElementById('ammountExpense').value;
    const typeOfExpense = document.getElementById('typeOfExpense').value;
    const newExpense = new NewExpense(newAmmountEx,typeOfExpense);

    this.setState({Expenses:[...this.state.Expenses, newExpense]});

    document.getElementById('ammountExpense').value = "";

    document.getElementById('add-expense').style.display ="none";
    this.addExpenseHidden = true;

    this.totalExpenses += parseFloat(newAmmountEx);
    this.balance = this.totalIncomes - this.totalExpenses;
  };

  render(){
    return (
      <div className="App">
        <Header menuOption ={this.hideMenu} addIncomePopUp={this.hideAddIncome} addExpensePopUp={this.hideAddExpense}/>
        <Menu/>
        <AddIncome addIncomeFunction={this.addNewIncome}/>
        <AddExpense addExpenseFunction={this.addNewExpense}/>
        <List expensesList={this.state.Expenses} incomesList={this.state.Incomes} balance={this.balance} totalIncomes={this.totalIncomes} totalExpenses={this.totalExpenses}/>
        <Chart income={this.state.Incomes} expenses={this.state.expenses} test={[1,2,3,3,4]}/>
      </div>
    );
  }
  
}

export default App;
