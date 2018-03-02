import React, { Component } from 'react';
import Product from '../Product';

class ProductList extends Component {

    state = {
        tasks: []
    }
    componentDidMount() {
        fetch('data/products.json')
            .then((promise) => promise.json())
            .then((tasks) => {
                console.log('fetch prods', tasks)
                this.setState({ tasks: tasks });
            });
    }

    render() {
        return (
            <div>
                <button >Reverse</button>
                <h1 > My tasks: </h1>
                {this.state.tasks.map(t => <Product key={t.name} product={t} ></Product>)}
            </div>
        );
    }
}

export default ProductList;