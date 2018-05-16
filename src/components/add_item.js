import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addToDoItem } from '../actions'


class AddItem extends Component {
    async handleAddItem(values){
        await this.props.addToDoItem(values);
        this.props.history.push('./');
    }

    renderInput(props){
        return (
            <div>
                <label>{props.label}</label>
                <input {...props.input}type="text" autoComplete="off"/>
                <p className="red-text text-darken-2">{props.meta.touched && props.meta.error}</p>
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center">Add Item</h1>
                <div className="row right-align">
                    <Link className="btn purple" to="/">View List</Link>
                </div>
                <div className="row">
                    <form onSubmit={handleSubmit(this.handleAddItem.bind(this))}className="col s12 m8 offset-m2">

                            <Field name="title" label="Item Title"component={this.renderInput} />
                            <Field name="details" label="Item Details"component={this.renderInput} />
                        <button className="btn purple">Add Item</button>
                    </form>
                </div>
            </div>
        )
    }
}

function validate(values){
    const { title, details } = values;
    const errors = {};

    if(!title){
        errors.title = 'please eter a title';
    }
    if(!details){
        errors.details = 'please give details aboput your item';
    }

    return errors;

}

AddItem = reduxForm({
    form: 'add_item',
    validate: validate,
})(AddItem);

export default connect(null, {addToDoItem: addToDoItem})(AddItem);