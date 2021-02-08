import React, { Component } from 'react';

class DeleteElem extends Component {
    handleDel = () =>{
        this.props.onDel();
    }
    render() {
        return (
            <button className="btnDelete" onClick={this.handleDel}>Delete</button> 
        );
    }
}

export default DeleteElem;