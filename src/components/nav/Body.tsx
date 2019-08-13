/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Products from './Products';
import Basket from './Basket';
import Navbar from './Navbar';
import Footer from './Footer';
import Util from './Util';
// json-server public/db.json --port 3001
// https://food-delivery-upplify.surge.sh/

export default function Body() {
    const [renderItemsState, setRenderItems] = useState("All");
    const [boolState, setBool] = useState(true);
    const [productsState, setProducts] = useState([]);
    const [cartItemsState, setCartItems] = useState([]);

    /* function para renderizar todos os items na página */
    useEffect(() => {
        async function initLoadItens() {
            const initItems = await Util.getAllItems();
            setProducts(initItems.data);
        }
        initLoadItens();
        if (localStorage.getItem('cartItems')) {
            let cart: any = localStorage.getItem('cartItems');
            cart = JSON.parse(cart);
            setCartItems(cart);
        }
    }, []);

    /* function para adicionar um item ao carrinho */
    function handleAddToCart(e: any, product: any) {
        const cartItems = Util.Add(cartItemsState, product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCartItems(cartItems);
        return cartItems;
    };

    /* function para remover item do carrinho */
    function handleRemoveCart(e: any, item: any) {
        const cartItems = cartItemsState.filter((elm: any) => elm._id !== item._id);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCartItems(cartItems);
        return { cartItems };
    };

    /* function que abre um sidebar para visualizar os itens do carrinho */
    function openSideBar() {
        let mySideBar: any = document.getElementById("mySidebar");
        if (boolState) {
            mySideBar.style.width = "360px";
            setBool(!boolState);
        } else {
            mySideBar.style.width = "0px";
            setBool(!boolState);
        }
    }

    /* function para fechar o sidebar */
    function closeSideBar() {
        let mySideBar: any = document.getElementById("mySidebar");
        mySideBar.style.width = "0px";
        setBool(!boolState);
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
    }


    return (
        <div>
            <Navbar renderItems={renderItems} openSideBar={openSideBar}></Navbar>
            <div style={{ borderRight: '1px solid' }} id="mySidebar" className="sidebar">
                <a style={{ color: 'white' }} href="#" className="closebtn" onClick={closeSideBar}>×</a>
                <a style={{ color: 'white' }} href="#">Shopping Cart <i className="fas fa-shopping-cart"></i></a>
                <hr style={{ width: '90%' }}></hr>
                <Basket cartItems={cartItemsState} handleRemoveFromCart={handleRemoveCart}></Basket>
            </div>
            <div id="style-1" data-spy="scroll" className="scrollspy container" style={{ marginTop: '60px' }}>
                <div>
                    <Products products={productsState} handleAddToCart={handleAddToCart}></Products>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}