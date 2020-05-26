import React from 'react';
import {Route, Switch} from 'react-router-dom'
import ProductsPage from "./components/ProductsPage/ProductsPage";

const App = () =>
    (
        <div>
            <Switch>
                <Route exact path="/category/:id" render={props =>
                    <ProductsPage categoryId={props.match.params.id}/>
                }/>
                <Route exact path="/order" render={() =>
                    <OrdersPage/>
                }/>
                <Route path="/" render={() =>
                    <ProductsPage/>
                }/>
            </Switch>
        </div>
    );

export default App;
