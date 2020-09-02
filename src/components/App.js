import React from 'react';
import Header from './Header'
import Menu from './Menu';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';

function App() {
  let menuHidden = true;

  function hideMenu(){
    if(menuHidden){
      document.getElementById('menu').style.display ="block";
      menuHidden = false;
    }else{
      document.getElementById('menu').style.display ="none";
      menuHidden = true;
    }
  }

  function hideAddIncome(){
    if(menuHidden){
      document.getElementById('add-income').style.display ="block";
      menuHidden = false;
    }else{
      document.getElementById('add-income').style.display ="none";
      menuHidden = true;
    }
  }

  function hideAddExpense(){
    if(menuHidden){
      document.getElementById('add-expense').style.display ="block";
      menuHidden = false;
    }else{
      document.getElementById('add-expense').style.display ="none";
      menuHidden = true;
    }
  }

  return (
    <div className="App">
      <Header menuOption ={hideMenu} addIncomePopUp={hideAddIncome} addExpensePopUp={hideAddExpense}/>
      <Menu/>
      <AddIncome />
      <AddExpense/>
    </div>
  );
}

export default App;
