import React, {Component} from 'react';
import Products from './Products';

class ProductJson extends Component {

    constructor() {
        super();
        this.sendJson = this.sendJson.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            name: '',
            description : '',
        };
    }

    sendJson(event) {
        var data = {
            "id" : 0,
            "name" : this.state.name,
            "description" : this.state.description,
            "category" : 1
        };
        var url = 'http://localhost:9000/addproductjson';

        console.log(JSON.stringify(data));

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div id="product">
                <label htmlFor="name">Product name</label>
                <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                <label htmlFor="description">Description</label>
                <input id="description" name="description" type="description" value={this.state.description}onChange={this.handleInputChange}/>
                <button onClick={this.sendJson}>Send</button>
                <Products />
            </div>
        );
    }

}


export default ProductJson;