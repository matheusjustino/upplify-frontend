/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Util from './Util';
import swal from 'sweetalert';

interface myProps {
    cartItems: never[],
    handleRemoveFromCart: (e: string) => void
}

export default function Basket(props: myProps) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(props.cartItems);
    }, [props.cartItems]);

    //const { cartItems } = props;
    return (
        <div className="container-fluid" style={{ fontSize: '12px' }}>
            <div id="area-check" className="alert alert-info">
                <h4><b>{cartItems.length === 0 ? <b>Basket is empty</b> : <div><b>You have {cartItems.length} different products in the basket.</b></div>}</b></h4>

                {cartItems.length > 0 &&
                    <div>
                        <ul className="list-group">
                            {cartItems.map((item: any) => {
                                return (
                                    <li style={{ fontSize: '1.3rem' }} className="list-group-item" key={item._id}>
                                        <b>{item.title} X {item.count} = {Util.formatCurrency(item.price * item.count)}</b>
                                        <i id="removeIcon" onClick={() => props.handleRemoveFromCart(item)} className="fas fa-times-circle fa-lg"></i>
                                    </li>
                                );
                            })}
                        </ul>
                        <b id="price-check">Total: {Util.formatCurrency(cartItems.reduce((a: any, c: any) => (a + c.price * c.count), 0))}</b>
                        <br />
                        <button id="button-check" className="btn btn-primary" onClick={() => {
                            localStorage.setItem('cartItems', JSON.stringify([]));
                            swal({ text: "Thank you for your preference!", icon: "success", closeOnClickOutside: false }).then(() => { window.location.reload(); })
                        }}>
                            Buy Now
                        </button>
                    </div>}
            </div>
        </div>
    );
}