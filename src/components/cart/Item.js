import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../../store/actions/cartActions';
// import { bindActionCreators } from 'redux';


class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.item.quantity,
            updatingCart: false
        };
    }

    componentDidUpdate() {
        if (this.state.updatingCart) {
            this.setState({
                updatingCart: false
            });

            this.props.updateCartQuantity(this.props.item.product.id, this.state.quantity);
        }
    }

    handleChange = (e) => {

        if (e.target.value <= 0) {
           return alert("Quantity must be greater than or equal to 1");
        }

        if (e.target.value > this.props.item.product.amount) {
            return alert("You have exceeded the available items of this product!");
        }
        
        if (this.state.quantity !== e.target.value) {
            this.setState({
                quantity: parseInt(e.target.value),
                updatingCart: true
            });
        }


        console.log("after this.props.item.quantity", this.props.item.quantity);
        console.log("after this.state", this.state);
   
    }

    handleRemove = (e) => {
        this.props.removeFromCart(this.props.item.product.id);
    }

    render() {
        
        const { item } = this.props;
        
        console.log(this.props.item.quantity + " Item Status")
        console.log(this.state.quantity + " State Status")

        return (

            <div className="row">
                <div className="col-md-2"><img className="img-fluid" src={item.product.image} alt="Product" width="150px"/>
                </div>
                <div className="col-md-3">
                    <h4 className="product-name"><strong>{item.product.title}</strong></h4>
                    <h5>{item.product.description}</h5>
                    <h6><strong>${item.product.price}</strong></h6>
                </div>
                <div className="col-md-4">
                    {/* <form > */}
                        
                            <input type="number" className="form-control" onChange={this.handleChange} value={this.state.quantity} />

                            {/* <button type="button" onClick={this.handleRemove} className="btn btn-link btn-md">
                                <span><i className="far fa-trash-alt"></i> 
                                </span>
                            </button> */}

                        

                        {/* {
                            this.state.btnVisible ? (
                                <div className="col-md-2">
                                    <button type="submit" className="btn btn-info">Update</button>
                                </div>
                            ) : null
                        } */}

                        {/* <div className="col-md-2"> */}
                            <button type="button" onClick={this.handleRemove} className="btn btn-link btn-md">
                                <span><i className="far fa-trash-alt"></i> 
                                </span>
                            </button>
                        {/* </div> */}
                    {/* </form> */}
                </div>
                <div className="col-md-3 text-right">
                <h6>Price:  ${item.product.price}</h6>
                <h6>Quantity:  {this.state.quantity}</h6>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        updateCartQuantity: (productId, quantity) => dispatch(updateCartQuantity(productId, quantity)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId))
    }

    // return bindActionCreators(
    //     updateCartQuantity,
    //     removeFromCart
    // )(dispatch);
};

export default connect(null, mapDispatchToProps)(Item);