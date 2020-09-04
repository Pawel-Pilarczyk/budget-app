import React from 'react';
import Overview from './Overview';


const Menu = () =>{
    let overviewHidden = false;
    let listHidden = false;
    let chartsHidden = false;

    function hideOverview(){
        if(overviewHidden){
          document.getElementById('overview').style.display ="block";
          overviewHidden = false;
        }else{
          document.getElementById('overview').style.display ="none";
          overviewHidden = true;
        }
    }

    function hideList(){
        if(listHidden){
          document.getElementById('list').style.display ="block";
          listHidden = false;
        }else{
          document.getElementById('list').style.display ="none";
          listHidden = true;
        }
    }

    function hideChart(){
        if(chartsHidden){
            document.getElementById('charts').style.display ="block";
            chartsHidden = false;
        }else{
          document.getElementById('charts').style.display ="none";
          chartsHidden = true;
        }
    }




    return(
        <div id="menu">
                <button onClick={hideOverview}>Overview</button>
                <button onClick={hideChart}>Charts</button>
                <button onClick={hideList}>List</button>
        </div>
    )
};

export default Menu;