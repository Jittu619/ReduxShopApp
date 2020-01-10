import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

    render() {
        this.props.cartUpdated();

        return (
            <div className="container-fluid">
                <nav className="navbar">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" exact to="/" activeStyle={{
                                color: 'green'
                            }}><i className="fas fa-store"></i> Shopping cart</NavLink>
                    </div>

                    <div className="mainNav">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/my-cart" activeStyle={{
                                color: 'green'
                            }}><span class="badge badge-danger">
                                {
                                    this.props.cart.length > 0 ? (
                                        <span>{this.props.cart.length}</span>
                                    ) : null
                                }</span>
                                <i className="fas fa-shopping-cart">
                                </i> My Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
};

export default connect(mapStateToProps)(Navbar);