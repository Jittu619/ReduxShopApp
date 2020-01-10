import React, { Component } from 'react';

class Product extends Component {
    state = {
        inCart: this.props.inCart
    };

    addToCart = (e) => {

        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
            inCart: true
        })
    }

    render() {

        const { product } = this.props;

        return (
            
                <div className="col-md-3">
                    <figure className="card card-product">
                        <div className="img-wrap">
                            <img className="img-fluid" src={product.image} alt="Product" />
                        </div>
                        <figcaption className="info-wrap">
                            <h4 className="title">{product.title}</h4>
                            <p className="desc">{product.description}</p>
                        </figcaption>

                        <div className="bottom-wrap">

                            <div className="productPrice">
                                <span>${product.price}</span>
                            </div>

                            {
                                this.state.inCart ? (
                                    <span className="btn btn-success">Added to cart</span>
                                ) : (
                                        <a href="#" onClick={this.addToCart} className="btn btn-sm btn-primary">Add to cart</a>
                                    )
                            }
                        </div>
                    </figure>
                </div>
               
                )
            }
        }
        
export default Product;