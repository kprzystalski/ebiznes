import React from "react";
import ExtendedNavbar from "../ExtendedNavbar/ExtendedNavbar";
import ProductsHeader from "../ProductsHeader/ProductsHeader";
import ProductList from "../ProductList/ProductList";
import CategoryName from "../CategoryName/CategoryName";

const ProductsPage = (props) => {
    const header = props.categoryId
        ? <CategoryName categoryId={props.categoryId}/>
        : <ProductsHeader/>;
    return (
        <div>
            <ExtendedNavbar/>
            {header}
            <ProductList categoryId={props.categoryId}/>
        </div>
    );
}

export default ProductsPage;
