import React from 'react';
import {Switch,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'

const App = ()=>{
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/contact" component={Contact} />
    {/* <Route exact path="/Login" component={Login} /> */}
    <Route component={Error} />
    </Switch>
    <Footer />
    </>
  )
}
export default App;