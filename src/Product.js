import React, { Component } from 'react';

class Product extends Component {
    constructor(){
        super();
        //this.buttonClicked = this.buttonClicked.bind(this);
    }
    state = {
        showDetails: false
    }
    buttonClicked = () => {
        this.setState((prev) => {
            console.log('prev',prev);
            return {showDetails:!prev.showDetails}}
        );
    }
    render() {
        return (
            <div>
                <span> {this.props.product.name} </span>
                <img src={this.props.product.img}/> 
                <button onClick={this.buttonClicked} >expand </button>
                {this.state.showDetails ? <span >{this.props.product.desc} </span> : <div></div> }
            </div>
        );
    }
}

export default Product;