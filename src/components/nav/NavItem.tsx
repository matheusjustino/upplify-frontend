import React from 'react';

interface myState {
    key: number,
    id: number,
    title: string
}

interface myProps {
    id: number,
    title: string
}

export default class NavItem extends React.Component<myProps, myState> {

    constructor(props:myProps) {
        super(props);
        this.state = {
            key: this.props.id,
            id: this.props.id,
            title: this.props.title
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        console.log(this.state.title);
    }

    render() {
        return(
            <li key={this.state.id}>
                <a onClick={this.onSubmit} style={{color:'black'}} href="#">{this.state.title}</a>
            </li>
        );
    }
}