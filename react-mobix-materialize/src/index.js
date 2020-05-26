import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {Provider} from "mobx-react";
import productStore from "./store/ProductStore"
import categoryStore from "./store/CategoryStore"
import orderStore from "./store/OrderStore"
import reviewStore from "./store/ReviewStore"
import returnStore from "./store/ReturnStore"
import buyFormStore from "./store/BuyFormStore"
import returnFormStore from "./store/ReturnFormStore"
import signUpFormStore from "./store/SignUpFormStore"
import signInFormStore from "./store/SignInFormStore"
import authenticationStore from "./store/AuthenticationStore"
import {Router} from "react-router-dom";
import hashHistory from "./history/hashHistory";
import 'mobx-react-lite/batchingForReactDom'

const history = hashHistory;

ReactDOM.render(
    <Provider productStore={productStore}
              categoryStore={categoryStore}
              orderStore={orderStore}
              buyFormStore={buyFormStore}
              reviewStore={reviewStore}
              returnStore={returnStore}
              returnFormStore={returnFormStore}
              signUpFormStore={signUpFormStore}
              signInFormStore={signInFormStore}
              authenticationStore={authenticationStore}
    >
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
