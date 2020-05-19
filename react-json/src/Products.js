import React, {Component} from 'react';

class Products extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            categories: [],
        };
    }

    async handleRequest(url) {
        var result = null;
        result = fetch(url, {
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000',
            },
            method: 'GET',
        }).then(response => { return response.json()})
             .then(responseData => {
                 return responseData;
             })
        return result;
    }

    async getProducts() {
        var url = "http://localhost:9000/productsjson"
        var response = await this.handleRequest(url);
        let products = [];
            response.map(prod => {
                let product = {
                    name: prod.name,
                    id: prod.id,
                    description: prod.description,
                    category: prod.category
                };
                products.push(product);
        })
        this.setState({products: products})
    }
/*
    getProducts2() {
        var url = "http://localhost:9000/productsjson"

        fetch(url, {
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000',
            },
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                let products = [];
                data.map(prod => {
                    let product = {
                        name: prod.name,
                        id: prod.id,
                        description: prod.description,
                        category: prod.category
                    };
                    products.push(product);
                })
                this.setState({products: products})
            });
    }
*/
    async getCategories() {
        var url = "http://localhost:9000/categoriesjson"
        var response = await this.handleRequest(url);
        let categories = {};
        response.map(cat => {
            categories[cat.id] = cat.name;
        })
        this.setState({categories: categories})
    }

    componentDidMount() {
       // this.getProducts2();
        this.getProducts();
        this.getCategories();
    }

    render() {
        return (
            <div className="products">
                {console.log(this.state.products)}
                <ul>
                    {this.state.products.map((product,index) => (
                        <div key={index}>
                            <h3>{product.id}: {product.name}</h3>
                            {product.description}
                            <p>Category: {this.state.categories[product.category]}</p>
                        </div>
                    ))}
                </ul>

            </div>
        )
    }
}

export default Products;