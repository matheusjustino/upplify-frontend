import React from 'react';
import NavItem from './NavItem';

interface myProps { }
interface myState {
    renderItem: string
}
/* eslint-disable */
export default class Navbar extends React.Component<myProps, myState> {

    constructor(props: myProps) {
        super(props);
        this.state = {
            renderItem: "All"
        }
        this.printItem = this.printItem.bind(this);
    }

    componentDidMount() {
        console.log(this.state.renderItem);
    }

    printItem(e:string) {
        this.setState({ renderItem: e });
        console.log(e);
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
                            <li><a onClick={(event: any) => this.printItem('All')} href="#">All <i className="fas fa-utensils"></i></a></li>
                            <li><a onClick={(event: any) => this.printItem('Chinese')} href="#">Chinese <i className="fas fa-cloud-meatball"></i></a></li>
                            <li><a onClick={(event: any) => this.printItem('Burguers')} href="#">Burguers <i className="fas fa-hamburger"></i></a></li>
                            <li><a onClick={(event: any) => this.printItem('Salad')} href="#">Salad <i className="fas fa-apple-alt"></i></a></li>
                            <li><a onClick={(event: any) => this.printItem('Cake')} href="#">Cake <i className="fas fa-cheese"></i></a></li>
                            <li><a onClick={(event: any) => this.printItem('Pizza')} href="#">Pizza <i className="fas fa-pizza-slice"></i></a></li>
                            <li><a href="#">Order <i className="fas fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                </nav>
                {this.state.renderItem}
            </div>
        );
    }
}

/*const navItens = [
    { id: 0, title: "All" },
    { id: 1, title: "Chinese" },
    { id: 2, title: "Burguers" },
    { id: 3, title: "Salad" },
    { id: 4, title: "Cake" },
    { id: 5, title: "Pizza" }
];
 
{navItens.map(function (navItem) {
                                return <NavItem key={navItem.id} id={navItem.id} title={navItem.title} ></NavItem>
                            })}
*/