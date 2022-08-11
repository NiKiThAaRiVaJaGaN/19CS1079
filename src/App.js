//import logo from './logo.svg';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import DisplayContent from './components/DisplayContent/DisplayContent';
import MainPage from './components/HomePage/MainPage';
import NavBar from './components/NavBar/Navigation';
import PlaceOrder from './components/NavBar/PlaceOrder/PlaceOrder';
//import {Router, Routes, Route, Link} from "react-router-dom";
import {
   BrowserRouter as Router, //replaces "Switch" used till v5
  Route,
  Redirect,
  Link,
  Switch
 } from "react-router-dom";
import CartContextProvider from './components/CartContext';
import Displayorder from './components/Displayorder/Displayorder';

function App() {
  console.log("Hi");
  return (
   <Router>
    <div className="App">
      <CartContextProvider>  
      <NavBar/>
      {/* <Displayorder/> */}
        <Switch> 
          <Route path='/display'>
              <DisplayContent/>
          </Route>
          <Route path='/order/:id'>
              <PlaceOrder/>
          </Route>
          <Route path='/checkout'>
              <Checkout/> 
          </Route> 
          <Route path='/displayorder'>
              <Displayorder/> 
          </Route>
          <Route path='/' component={MainPage}/> 
              {/* <MainPage/>
          </Route>*/}
        </Switch>
      </CartContextProvider>
    </div>
   </Router>   
  );
  
}

export default App;
