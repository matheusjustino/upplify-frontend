/* eslint-disable */
import React from 'react';
import Util from './Util';

export default function Basket(props: any) {
    const { cartItems } = props;

    return (
        <div className="container-fluid" style={{ fontSize: '12px' }}>
            <div className="alert alert-info">
                <h4><b>{cartItems.length === 0 ? <b>Basket is empty</b> : <div><b>You have {cartItems.length} different products in the basket.</b></div>}</b></h4>

                {cartItems.length > 0 &&
                    <div>
                        <ul className="list-group">
                            {cartItems.map((item: any) => {
                                return (
                                    <li style={{ fontSize: '1.3rem' }} className="list-group-item" key={item.id}>
                                        <b>{item.title} X {item.count} = {Util.formatCurrency(item.price * item.count)}</b>
                                        <i onClick={(e: any) => props.handleRemoveFromCart(e, item)} className="fas fa-times-circle fa-lg"></i>
                                    </li>
                                );
                            })}
                        </ul>
                        <b style={{ fontSize: '1.18em' }}>Total: {Util.formatCurrency(cartItems.reduce((a: any, c: any) => (a + c.price * c.count), 0))}</b>
                        <br />
                        <button className="btn btn-primary" onClick={() => alert("Checkout needs to implement...")}>
                            Checkout
                        </button>
                    </div>}
            </div>
        </div>
    );
}