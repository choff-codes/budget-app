import React, { Component } from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            salary: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Side Bar</h1>
                <h2>{this.props.total}</h2>
            </div>
        )
    }
}

export default SideBar;