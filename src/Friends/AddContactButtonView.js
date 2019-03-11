import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class AddContactButtonView extends Component {
    addContact = () => {
        this.props.addContact(`/addcontact`)
    }

    render() {
        return (
            <Button bsStyle="primary" className="btn-margin" onClick={this.addContact.bind(this)}>
                Create new contact
            </Button>
        )
    }
}

export default AddContactButtonView