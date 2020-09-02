import React from 'react';
import Header from './Header'
import Menu from './Menu'

function App() {
  let menuHidden = false;

  function hideMenu(){
    if(menuHidden){
      document.getElementById('menu').style.display ="block";
      menuHidden = false;
    }else{
      document.getElementById('menu').style.display ="none";
      menuHidden = true;
    }
  }
  return (
    <div className="App">
      <Header menuOption ={hideMenu}/>
      <Menu/>
    </div>
  );
}

export default App;
