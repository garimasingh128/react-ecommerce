import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from "./components/Default";
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <Fragment style={{backgroundColor: "light-blue"}}>
        <NavBar />

        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
