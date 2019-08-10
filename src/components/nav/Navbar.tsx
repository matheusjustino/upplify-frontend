/* eslint-disable */
import React from 'react';
import Products from './Products';
import Basket from './Basket';
import Util from './Util';

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
            console.log(localStorage.getItem('cartItems'))
            let cart:any = localStorage.getItem('cartItems');
            cart = JSON.parse(cart);
            console.log(cart)
            this.setState({ cartItems: cart });
        }
    }

    handleAddToCart(e:any, product:any) {
        this.setState(state => {
            const cartItems = this.state.cartItems;
            let productAlreadyInCart = false;
            cartItems.forEach((item:any) => {
                if (item.id === product.id) {
                    productAlreadyInCart = true;
                    item.count++;
                }
            });
            if (!productAlreadyInCart) {
                cartItems.push({ ...product, count: 1 });
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            console.log(localStorage.getItem("cartItems"));
        });
    }

    handleRemoveCart(e:any, item:any) {
        this.setState(state => {
            const cartItems = state.cartItems.filter((elm:any) => elm.id !== item.id);
            //console.log(cartItems)
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            return { cartItems: cartItems };
        });
    }

    openSideBar() {
        let mySidebar: any = document.getElementById("mySidebar");
        if (this.state.bool) {
            mySidebar.style.width = "300px";
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
                <div id="mySidebar" className="sidebar">
                    <a href="#" className="closebtn" onClick={() => this.closeSideBar()}>×</a>
                    <a href="#">Carrinho</a>
                    <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveCart}></Basket>
                </div>
                <div className="container">
                    <div>
                        <Products products={this.state.products} handleAddToCart={this.handleAddToCart}></Products>
                    </div>
                </div>
            </div>
        );
    }
}


/////////////////////// FUNCTIONS /////////////////////

//json-server public/db.json --port 3001
const addItem = (e: any) => {
    let basket: any = document.getElementById('mySidebar');
    let a = document.createElement('a');
    let p = document.createTextNode(e.p);
    let t = document.createTextNode(e.name);
    a.appendChild(p)
    a.appendChild(t);
    basket.appendChild(a);
}