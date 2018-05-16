import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingleItem} from '../actions'

class SingleItem extends React.Component{

    componentDidMount(){
        this.props.getItem(this.props.match.params.id)
    }

    render(){
        const {title, details} = this.props.item

        // challenge: display all available info to user
        // get time, date when created and when completed
        // add two buttons, one to toggle complete (change text on button)
        // one to delete item from list. Redirect you back to list
        console.log(this.props.item)

        return(
            <div className="center">
                <h1>To Do Item</h1>
                <div className="row right-align">
                    <Link to='/' className='btn purple'>Back to Full List</Link>
                </div>
                <h3>{title}</h3>
                <h4>{details}</h4>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, {getItem: getSingleItem})(SingleItem);