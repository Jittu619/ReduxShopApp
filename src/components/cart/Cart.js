import React, { Component } from 'react';
import Item from './Item';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class Cart extends Component {
    render() {

        let total = 0;

        this.props.cart.map(item => total += item.product.price * item.quantity);

        const cart = this.props.cart.length > 0 ? (
            <div>
                <div className="card-body">
                    {this.props.cart.map(item => {
                        return (
                            <div key={item.product.id}>
                                <Item item={item} />
                                <hr />
                            </div>
                        )
                    })
                    }
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="checkOut btn btn-success btn-sm">CheckOut
                            </h4>

                            <h4 className="text-right totalPrice">Total: <strong>${total.toFixed(3)}</strong>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        ) : (
                <div className="card-body">
                    <p>Cart is empty</p>
                </div>
            )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-info">
                            <div className="card-header">
                                <div className="card-title">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>
                                                <i className="fas fa-cart-arrow-down"></i> My Shopping Cart
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {cart}
                        </div>
                    </div>
                </div>
                <div className="row">
                <NavLink className="navbar-brand text-dark" to="/"><h6>More Shopping...</h6></NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart
    }
};

export default connect(mapStateToProps)(Cart);