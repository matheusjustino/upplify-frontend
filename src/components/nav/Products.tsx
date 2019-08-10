import React from 'react';
import Util from './Util';

interface myProps { }

export default class Products extends React.Component<any> {
    render() {
        const productItems = this.props.products.map((product: any) =>
            <div key={product.id} className="col-lg-3 col-md-3 col-sm-4">
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={(e:any) => {this.props.handleAddToCard(e, product)}}>
                        <img src={require('./images.jpg')} alt={product.title} />
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <div>
                        <b>{Util.formatCurrency(product.price)}</b>
                        <button className="btn btn-success" onClick={(e:any) => {this.props.handleAddToCard(e, product)}}>Add</button>
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
}