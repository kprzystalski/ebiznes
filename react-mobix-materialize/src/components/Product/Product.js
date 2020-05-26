import React from "react";
import Cookies from "js-cookie";
import {inject, observer} from "mobx-react";

const Product = (props) => {
    const product = props.product;
    const descriptionStyle = {
        textAlign: 'justify',
        textJustify: 'inter-word'
    };
    const buyModal = props.authenticationStore.loggedIn === true || Cookies.get('authenticator')
        ? <BuyModal productId={product.id}/>
        : null;
    return (
        <div className="col m3">
            <div className="card z-depth-2" key={product.id}>
                <div className="card-image">
                    <img className='activator' src={product.imageUrl} alt={product.name}/>
                    {buyModal}
                </div>

                <div className="card-content">
                    <p>{product.name}</p>
                    <p><b>Price: {product.price}$</b></p>
                    <ProductRating rating={product.rating}/>
                </div>

                <div className="card-reveal" style={descriptionStyle}>
                    <span className="card-title grey-text text-darken-4">
                        Description<i className="material-icons right">close</i>
                    </span>
                    <p>{product.description}</p>
                </div>

            </div>
        </div>
    )
}

export default inject('authenticationStore')(observer(Product));
