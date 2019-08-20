/* eslint-disable */
import React from 'react';

interface myProps {
    renderItems: (filter: string) => void,
    openSideBar: () => void
}

export default function Navbar(props: myProps) {

    return (
        <nav id="navMain" className="navbar navbar-default" style={{ background: '#D72638' }}>
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
                    <li><a onClick={() => props.renderItems('All')} href="#" style={{color:'white'}}>All <i className="fas fa-utensils"></i></a></li>
                    <li><a onClick={() => props.renderItems('chinese')} href="#" style={{color:'white'}}>Chinese <i className="fas fa-cloud-meatball"></i></a></li>
                    <li><a onClick={() => props.renderItems('burgers')} href="#" style={{color:'white'}}>Burgers <i className="fas fa-hamburger"></i></a></li>
                    <li><a onClick={() => props.renderItems('salad')} href="#" style={{color:'white'}}>Salad <i className="fas fa-apple-alt"></i></a></li>
                    <li><a onClick={() => props.renderItems('beverage')} href="#" style={{color:'white'}}>Beverage <i className="fas fa-coffee"></i></a></li>
                    <li><a onClick={() => props.renderItems('pizza')} href="#" style={{color:'white'}}>Pizza <i className="fas fa-pizza-slice"></i></a></li>
                    <li><a onClick={() => props.openSideBar()} href="#" style={{color:'white'}}>Order <i className="fas fa-shopping-cart"></i></a></li>
                </ul>
            </div>
        </nav>
    );
}