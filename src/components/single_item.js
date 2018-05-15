import React, { Component } from 'react';

class SingleItem extends Component {
    componentDidMount(){
        console.log('lonely props:', this.props)
    }
    render(){
        return (
            <h1 className="center">All the Single Items</h1>
        )
    }
}

export default SingleItem;