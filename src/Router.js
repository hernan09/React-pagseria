import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './componentes/nav/Nav'
import Home from './componentes/home/Home'
import About from './componentes/about/About'
import Navigation from './componentes/navigation/Navigation'
import Footer from './componentes/footer/Footer'


const Routes = () => (

    <
    Router >
    <
    div >
    <
    Nav > < /Nav>  <
    Route exact path = "/"
    component = { Home }
    />  <
    Route exact path = "/about"
    component = { About }
    />  <
    Route exact path = "/navigation"
    component = { Navigation }
    /> <
    Footer > < /Footer>


    <
    /div>


    <
    /Router>
)
export default Routes