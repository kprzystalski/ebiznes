import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Product from "../Product/Product";

class ProductList extends Component {

    componentDidMount() {
        this.props.categoryId
            ? this.props.productStore.getProductsByCategoryIdAsync(this.props.categoryId)
            : this.props.productStore.getProductsAsync();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.categoryId) {
            if (prevProps.categoryId !== this.props.categoryId) {
                this.props.productStore.getProductsByCategoryIdAsync(this.props.categoryId);
            }
        } else if (prevProps.categoryId) {
            this.props.productStore.getProductsAsync();
        }
    }

    render() {
        const products = this.props.productStore.filteredProducts
            .map(product => <Product key={product.id} product={product}/>);
        return (
            <div className="container">
                <div className="row">
                    {products}
                </div>
            </div>
        );
    }
}

export default inject("productStore")(observer(ProductList));
