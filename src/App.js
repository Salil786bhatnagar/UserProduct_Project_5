import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './Component/Homepage';
import Categories from './Component/Categories';
import Jewelery from './Component/CategorieItem/Jewelery';
import Currentpage from './Component/CategorieItem/Currentpage';
import './App.css';
import './Custom.css';
import Search from './Component/CategorieItem/Search';

import Counter from './Component/&1Reactjs_Testing/Counter';
import DigitalClock from './Component/&1Reactjs_Testing/CurrentTime_digitalclock'
import InputUpdateValue from './Component/&1Reactjs_Testing/InputUpdateValue';
import CallApi_Axios from './Component/&1Reactjs_Testing/CallApi_Axios';
import CallApi_Fetch from './Component/&1Reactjs_Testing/CallApi_Fetch'
import ParentData from './Component/&1Reactjs_Testing/Parent';
import Signin from './Component/Signin';
function App(props) {
  return (
    <div className="App">
     {/* <Homepage/> */}
      <Router>
        <Route 
            path="/"
            component={Signin}
            exact
            strict
            history={props.history}
          />
         <Route 
           path="/Homepage"
           component={Homepage}
           exact
           strict
           history={props.history}
         />
         
         <Route 
           path="/Categories"
           component={Categories}
           exact
           strict
           history={props.history}
         />
          <Route 
           path="/Jewelery"
           component={Jewelery}
           exact
           strict
           history={props.history}
         />

        <Route 
           path="/Currentpage/:id/:category/:price/:rate/:count/:title/:description"
           component={Currentpage}
           exact
           strict
           history={props.history}
         />

          <Route 
           path="/Search"
           component={Search}
           exact
           strict
           history={props.history}
         />

         <Route 
           path="/Counter"
           component={Counter}
           exact
           strict
           history={props.history}
         />

        <Route 
           path="/DigitalClock"
           component={DigitalClock}
           exact
           strict
           history={props.history}
         />
       
       <Route 
           path="/InputUpdateValue"
           component={InputUpdateValue}
           exact
           strict
           history={props.history}
         />

      <Route 
           path="/CallApi_Axios"
           component={CallApi_Axios }
           exact
           strict
           history={props.history}
         />

        <Route 
           path="/CallApi_Fetch"
           component={CallApi_Fetch }
           exact
           strict
           history={props.history}
         />

         <Route 
           path="/ParentData"
           component={ParentData }
           exact
           strict
           history={props.history}
         />  

    
      </Router>
    </div>
  );
}

export default App;
