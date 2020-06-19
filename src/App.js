import React , { Component }from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link, Redirect} from "react-router-dom";

//Home

import HomeApp from './container/home-app';

//Product

import ProductCourse from './container/product-course';
import ProductVideo from './container/product-video';
import ProductInstrument from './container/product-instrument';

//User

import UserApp from './container/user-app';

//News

import News from './container/news';

// Cart
// import CartApp from './container/cart-app';
// import CartCheckout from './components/cart/cart-checkout';
import CartCheckOrder from './components/cart/cart-checkOrder';

// Login
import AllLoginPage from './components/login/all-login-page';

//UserRegister
import UserRegistered from './components/register/user-register';

// ManufacturerRegistered
import ManufacturerRegistered from './components/register/manufacturer-register';
//Forum
import Forum from './container/Forum';
//Footer

import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <>
      
      <Route path="/" exact>
        <HomeApp />
      </Route>

      <Route path="/course" exact>
        <ProductCourse />
      </Route>
      <Route path="/video" exact>
        <ProductVideo />
      </Route>
      <Route path="/instrument" exact>
        <ProductInstrument />
      </Route>

      <Route path="/news" exact>
        <News />
      </Route>
      <Route path="/About">
        <HomeApp />
      </Route>

      <Route path="/Forum">
        <HomeApp />
      </Route>
      
      <Route path="/AnyQuestion">
        <HomeApp />
      </Route>
      <Route path="/About">
        <HomeApp />
      </Route>

      <Route path="/user" exact>
        <UserApp />
      </Route>

      <Route path="/cart" >
        {/* <CartCheckout /> */}
        <CartCheckOrder />
      </Route>

      <Route path="/login" >
        <AllLoginPage />
      </Route>

      <Route path="/register/user" >
        <UserRegistered />
      </Route>

      <Route path="/register/manufacturer" >
        <ManufacturerRegistered />
      </Route>
      <Footer />
      </>
    </Router>
  )
}

export default App;
