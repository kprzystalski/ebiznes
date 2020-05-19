import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Products from './Products'
import ProductForm from './ProductForm'
import ProductJson from "./ProductJson";

class App extends Component {
  render() {
    return <Router>
        <div id="menu">
            <ul>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/productadd">Add Product</Link>
                </li>
                <li>
                    <Link to="/productjson">Add Product JSON</Link>
                </li>
            </ul>
        </div>
        <Route path="/products" component={Products}/>
        <Route path="/productadd" component={ProductForm}/>
        <Route path="/productjson" component={ProductJson}/>
    </Router>
  }
}

export default App;
