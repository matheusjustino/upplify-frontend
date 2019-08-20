/* eslint-disable */
import React from 'react';
import Util from './Util';

interface myProps {
    products: never[],
    handleAddToCart: (e: string) => void
}

export default function Products(props: myProps) {
    const productItems = props.products.map((product: any) =>
        <div id="products-main" key={product._id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div id="products-list" className="thumbnail text-center">
                <a href={`#${product._id}`} onClick={() => props.handleAddToCart(product)}>
                    <img id="product-image" src={require('./images/images.jpg')} alt={product.title} />
                </a>
                <p id="product-title">
                    {product.title}
                </p>
                <div id="product-desc" className="row">
                    <b>{Util.formatCurrency(product.price)}</b>
                    <button id="buy-button" className="btn btn-success" onClick={() => props.handleAddToCart(product)}>Add</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="row">
            {productItems}
        </div>
    );
}
