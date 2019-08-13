/* eslint-disable */
import React from 'react';
import Util from './Util';

export default function Products(props: any) {
    const productItems = props.products.map((product: any) =>
        <div key={product._id} className="col-lg-3 col-md-3 col-sm-4">
            <div id="products-list" className="thumbnail text-center">
                <a href={`#${product._id}`} onClick={(e: any) => props.handleAddToCart(e, product)}>
                    <img src={require('./images.jpg')} alt={product.title} />
                    <p id="q">
                        {product.title}
                    </p>
                </a>
                <div>
                    <b>{Util.formatCurrency(product.price)}</b>
                    <button className="btn btn-success btn" onClick={(e: any) => props.handleAddToCart(e, product)}>Add</button>
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
