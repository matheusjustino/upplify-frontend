import React from 'react';
import NavItem from './NavItem';

interface myProps {}
interface myState {
    renderItem: string
}

export default class Navbar extends React.Component<myProps, myState> {

    constructor(props:myProps) {
        super(props);
        this.state = {
            renderItem: "All"
        }
    }

    componentDidMount() {
        console.log(this.state.renderItem);
    }

    render() {
        return (
            <div>
                <nav id="navMain" className="navbar navbar-default" style={{background: '#e17055'}}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#" className="navbar-brand" style={{color:'white'}}>Delivery Food</a>
                    </div>
                    <div className="collapse navbar-collapse" id="nav-collapse">
                        <ul className="nav navbar-nav">
                            {navItens.map(function(navItem) {
                                return <NavItem key={navItem.id} id={navItem.id} title={navItem.title} ></NavItem>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const navItens = [
    { id: 0, title: "All" },
    { id: 1, title: "Chinese" },
    { id: 2, title: "Burguers" },
    { id: 3, title: "Salad" },
    { id: 4, title: "Cake" },
    { id: 5, title: "Pizza" }
];