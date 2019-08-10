import React from 'react';
import Util from './Util';

interface myProps { }
export default class Basket extends React.Component<any> {

    render() {
        //console.log(this.props);
        const { cartItems } = this.props;

        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "Basket is empty" : <div>You have {cartItems.length} products in the basket.</div>}
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map((item: any) => {
                                return (
                                    <li key={item.id}>
                                        <b>{item.title}</b>
                                        X {item.count} = {Util.formatCurrency(item.price * item.count)}
                                        <button className="btn btn-danger" onClick={(e: any) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                    </li>
                                );
                            })}
                        </ul>
                        Total: {Util.formatCurrency(cartItems.reduce((a: any, c: any) => (a + c.price * c.count), 0))}
                        <br />
                        <button className="btn btn-primary" onClick={() => alert("Checkout needs to implement...")}>
                            Checkout
                        </button>
                    </div>}
            </div>
        );
    }
}