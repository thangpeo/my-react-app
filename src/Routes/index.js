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
                <Route exact path="/my-react-app" component={HomePage}/>
                <Route exact path="/my-react-app/about" component={About}/>
                <Route exact path="/my-react-app/cart" component={CartPage}/>
                <Route exact path="/my-react-app/products" component={ProductsPage}/>
                <Route exact path="/my-react-app/productdetail/:id" component={ProductDetailPage}/>
            </Switch>
    )
}
