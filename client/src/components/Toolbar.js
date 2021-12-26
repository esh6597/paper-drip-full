import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

import { BsSearch, BsPersonFill, BsCartFill, 
    BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";
import variables from '../variables.module.scss';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

class Toolbar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isCartOpen: false,
            isModalOpen: false
        };

        this.toggleCart = this.toggleCart.bind(this);
    }

    toggleCart() {
        this.setState({isCartOpen: !this.state.isCartOpen});
    }

    handleSubtract(id, oldQuantity) {
        if (oldQuantity < 2) {
            this.props.removeCartItem(id);
        } else {
            this.props.updateCart(id, -1);
        }
    }

    handleAddition(id) {
        this.props.updateCart(id, 1);
    }

    handleChange(id, oldQuantity, newQuantity) {
        if (newQuantity === 0) {
            this.props.removeCartItem(id);
        } else {
            let amtToAdd = newQuantity - oldQuantity;
            this.props.updateCart(id, amtToAdd);
        }
    }

    render() {
        const cartDisplay = () => {
            if (this.props.cart.cart.length < 1) {
                return (
                    <div className="cart-body">
                        Your cart is empty.
                    </div>
                );
            } else {
                const cartItems = this.props.cart.cart.map(cartItem => {
                    const referencedItem = this.props.items.find(reference => reference.id === cartItem.id)
                    return (
                        <div className="row d-flex align-items-center cart-body" key={referencedItem.id}>
                            <div className="col-7 cart-title">
                                <p>{referencedItem.name}</p>
                                <p className="cart-summary">{referencedItem.summary.length > 25 ? 
                                        referencedItem.summary.slice(0,25).trim() + '...'
                                        : referencedItem.summary
                                    }
                                </p>
                            </div>
                            <div className="col-5 cart-quantity">
                                <p>Quantity:</p>
                                <form>
                                    <BsFillDashCircleFill 
                                        onClick={() => this.handleSubtract(cartItem.id, cartItem.quantity)}
                                    />
                                    <input 
                                        type="text" 
                                        value={cartItem.quantity} 
                                        onChange={e => this.handleChange(cartItem.id, cartItem.quantity, e.target.value)}
                                    />
                                    <BsFillPlusCircleFill
                                        onClick={() => this.handleAddition(cartItem.id)}
                                    />
                                </form>
                            </div>
                        </div>
                    );
                });
                return (
                    <React.Fragment>
                        {cartItems}
                    </React.Fragment>
                );
            }
        }

        const cartBottom = () => {
            return (
                <div className="row d-flex cart-body justify-content-between">
                    <div className="d-inline col">
                        <Button
                            onClick={() => this.props.emptyCart()}
                            variant="primary"
                        >
                            Empty Cart
                        </Button>
                    </div>
                    <div className="d-inline col d-flex justify-content-end">
                        <Button
                            disabled
                            variant="primary"
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            );
        };

        return (
            <React.Fragment>
                <div className='toolbar'>
                    <div></div>
                    <div>
                        <BsCartFill 
                            onClick={this.toggleCart}
                        />
                    </div>
                </div>
                <div className="cart-wrapper">
                    <Collapse in={this.state.isCartOpen}>
                        <div>
                            {cartDisplay()}
                            {cartBottom()}
                        </div>
                    </Collapse>
                </div>
            </React.Fragment>
        );
    }
}

export default Toolbar;