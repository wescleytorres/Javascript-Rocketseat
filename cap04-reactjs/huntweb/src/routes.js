import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import Product from "./pages/product"

const Routes = () => (
// BROWSERROUTER vai definir que estamos usando uma rota atravez de um browser
// SWICTH vai permitir que apenas uma rota seja chamada ao mesmo tempo
// o EXACT serve para quando for exatamente oq contem no path
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
)

export default Routes