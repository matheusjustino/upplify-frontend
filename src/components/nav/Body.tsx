/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Products from './Products';
import Basket from './Basket';
import Navbar from './Navbar';
import Footer from './Footer';
import Util from './Util';
import Carousel from './Carousel';
// json-server public/db.json --port 3001
// https://food-delivery-upplify.surge.sh/


export default function Body() {
    const [renderItemsState, setRenderItems] = useState("All");
    const [sidebarClosed, setSidebarClosed] = useState(false);
    const [main, setMain] = useState(true);
    const [productsState, setProducts] = useState([]);
    const [cartItemsState, setCartItems] = useState([]);

    /* function para renderizar todos os items na página */
    useEffect(() => {
        async function initLoadItens() {
            const initItems = await Util.getAllItems();
            setProducts(initItems.data);
        }
        initLoadItens();
        setMain(true);
        if (localStorage.getItem('cartItems')) {
            let cart: string | any = localStorage.getItem('cartItems');
            cart = JSON.parse(cart);
            setCartItems(cart);
        }
    }, []);

    /* function para adicionar um item ao carrinho */
    function handleAddToCart(product: string) {
        const cartItems = Util.Add(cartItemsState, product);
        /* abrir o sidebar após adicionar um item ao carrinho (se o carrinho estiver vazio) */
        if (!cartItemsState.length) {
            if (sidebarClosed === false) {
                let mySideBar: any = document.getElementById("mySidebar");
                mySideBar.style.width = "360px";
                setSidebarClosed(!sidebarClosed);
            }
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCartItems(cartItems);
        return cartItems;
    };

    /* function para remover item do carrinho */
    function handleRemoveCart(product: string) {
        const cartItems = Util.Remove(cartItemsState, product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCartItems(cartItems);
        return cartItems;
    };

    /* function que abre um sidebar para visualizar os itens do carrinho */
    function openSideBar() {
        let mySideBar: any = document.getElementById("mySidebar");
        if (sidebarClosed === false) {
            mySideBar.style.width = "360px";
            setSidebarClosed(!sidebarClosed);
        } else {
            mySideBar.style.width = "0px";
            setSidebarClosed(!sidebarClosed);
        }
    }

    /* function para fechar o sidebar */
    function closeSideBar() {
        let mySideBar: any = document.getElementById("mySidebar");
        if (sidebarClosed) {
            mySideBar.style.width = "0px";
            setSidebarClosed(!sidebarClosed);
        }
    }

    /* function para renderizar os itens de acordo com a categoria */
    async function renderItems(e: string) {
        await setRenderItems(e);
        if (e === "All") {
            const getAll = await Util.getAllItems();
            setProducts(getAll.data);
        } else {
            const filteredItems = await Util.getFilteredItems(e);
            setProducts(filteredItems);
        }
        setMain(false);
    }


    return (
        <div>
            <Navbar renderItems={renderItems} openSideBar={openSideBar}></Navbar>
            <div style={{ borderRight: '1px solid' }} id="mySidebar" className="sidebar">
                <a style={{ color: 'white' }} href="#" className="closebtn" onClick={closeSideBar}>×</a>
                <a style={{ color: 'white' }} href="#">Shopping Cart <i className="fas fa-shopping-cart"></i></a>
                <hr></hr>
                <Basket cartItems={cartItemsState} handleRemoveFromCart={handleRemoveCart}></Basket>
            </div>
            <div>
                {main ? <div className="fadeIn">
                    <Carousel></Carousel>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center my-5">
                                <h1>WE ARE UPPLIFY</h1>
                                <p>What do you need?</p>
                            </div>
                        </div>
                    </div>
                </div> 

                :

                <div id="style-1" data-spy="scroll" className="scrollspy container" style={{ marginTop: '60px' }}> <Products products={productsState} handleAddToCart={handleAddToCart}></Products></div>}
            </div>
            <Footer></Footer>
        </div>
    );
}