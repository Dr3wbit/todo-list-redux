import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListData } from '../actions';
import { Link } from 'react-router-dom';

class List extends Component {
    componentDidMount() {
        this.props.getListData();
    }
    render() {
        const { listData } = this.props;

        const listItems = listData.map((item, index) => {
            return <li className="collection-item" key={index}>{item.title}</li>
        })
        return (
            <div>
                <h1 className='center'>To Do List</h1>
                <div className="rwo right-align">
                    <Link className="btn purple"to='/add-item'>Add Item</Link>
                </div>
                <ul className="collection">
                    {listItems}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listData: state.list.all
    }
}

export default connect(mapStateToProps, { getListData: getListData })(List);