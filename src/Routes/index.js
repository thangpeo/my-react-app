import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import ProductsPage from '../pages/ProductsPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import About from '../pages/About'

export default function Routes() {
    return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/cart" component={CartPage}/>
                <Route exact path="/products" component={ProductsPage}/>
                <Route exact path="/productdetail/:id" component={ProductDetailPage}/>
            </Switch>
    )
}
