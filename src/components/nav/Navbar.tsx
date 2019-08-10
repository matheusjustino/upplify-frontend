/* eslint-disable */
import React from 'react';
import Products from './Products';
import Basket from './Basket';
import Util from './Util';

//json-server public/db.json --port 3001

interface myProps { }
interface myState {
    renderItems: string,
    bool: boolean,
    products?: any,
    cartItems?: any,
}
export default class Navbar extends React.Component<myProps, myState> {

    constructor(props: myProps) {
        super(props);
        this.state = {
            renderItems: "All",
            bool: true,
            products: [],
            cartItems: []
        }
        this.renderItems = this.renderItems.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveCart = this.handleRemoveCart.bind(this);
    }

    async componentWillMount() {
        const initItems = await Util.getAllItems();
        this.setState({
            products: initItems
        });
        if (localStorage.getItem('cartItems')) {
            let cart: any = localStorage.getItem('cartItems');
            cart = JSON.parse(cart);
            this.setState({ cartItems: cart });
        }
    }

    handleAddToCart(e: any, product: any) {
        this.setState(state => {
            const cartItems = state.cartItems;
            let productAlreadyInCart = false;
            cartItems.forEach((item: any) => {
                if (item.id === product.id) {
                    productAlreadyInCart = true;
                    item.count++;
                }
            });
            if (!productAlreadyInCart) {
                cartItems.push({ ...product, count: 1 });
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return cartItems;
        });
    }

    handleRemoveCart(e: any, item: any) {
        this.setState(state => {
            const cartItems = state.cartItems.filter((elm: any) => elm.id !== item.id);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            return { cartItems: cartItems };
        });
    }

    openSideBar() {
        let mySidebar: any = document.getElementById("mySidebar");
        if (this.state.bool) {
            mySidebar.style.width = "360px";
            this.setState({ bool: !this.state.bool });
        } else {
            mySidebar.style.width = "0px";
            this.setState({ bool: !this.state.bool });
        }
    }

    closeSideBar() {
        let mySidebar: any = document.getElementById("mySidebar");
        mySidebar.style.width = "0px";
        this.setState({ bool: !this.state.bool });
    }

    async renderItems(e: string) {
        await this.setState({ renderItems: e });
        if (e === "All") {
            const getAll = await Util.getAllItems();
            this.setState({
                products: getAll
            });
            return;
        } else {
            const filteredItems = await Util.getFilteredItems(e);
            this.setState({
                products: filteredItems
            });
        }
    }


    render() {
        return (
            <div>
                <nav id="navMain" className="navbar navbar-default" style={{ background: '#e17055' }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand" style={{ color: 'white', fontSize: 'x-large' }}>Food Delivery <i className="fas fa-hamburger"></i></a>
                    </div>
                    <div className="collapse navbar-collapse" id="nav-collapse">
                        <ul className="nav navbar-nav">
                            <li><a onClick={(event: any) => this.renderItems('All')} href="#">All <i className="fas fa-utensils"></i></a></li>
                            <li><a onClick={(event: any) => this.renderItems('chinese')} href="#">Chinese <i className="fas fa-cloud-meatball"></i></a></li>
                            <li><a onClick={(event: any) => this.renderItems('Burgers')} href="#">Burgers <i className="fas fa-hamburger"></i></a></li>
                            <li><a onClick={(event: any) => this.renderItems('salad')} href="#">Salad <i className="fas fa-apple-alt"></i></a></li>
                            <li><a onClick={(event: any) => this.renderItems('beverage')} href="#">Beverage <i className="fas fa-coffee"></i></a></li>
                            <li><a onClick={(event: any) => this.renderItems('pizza')} href="#">Pizza <i className="fas fa-pizza-slice"></i></a></li>
                            <li><a onClick={() => this.openSideBar()} href="#">Order <i className="fas fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                </nav>
                <div style={{ borderRight: '1px solid' }} id="mySidebar" className="sidebar">
                    <a style={{color:'white'}} href="#" className="closebtn" onClick={() => this.closeSideBar()}>×</a>
                    <a style={{color:'white'}} href="#">Shopping Cart <i className="fas fa-shopping-cart"></i></a>
                    <hr style={{ width: '90%' }}></hr>
                    <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveCart}></Basket>
                </div>
                <div id="style-1" data-spy="scroll" className="scrollspy container" style={{ marginTop: '60px' }}>
                    <div>
                        <Products products={this.state.products} handleAddToCart={this.handleAddToCart}></Products>
                    </div>
                </div>

                <section id="footer" style={{ background: '#e17055' }}>
                    <div className="container">
                        <div className="row text-center text-xs-center text-sm-left text-md-left">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                    <h4><b style={{color:'white'}}>Social</b></h4>
                                    <hr style={{width:'100%'}}></hr>
                                    <ul className="list-unstyled list-inline social text-center">
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-google-plus"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fas fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
