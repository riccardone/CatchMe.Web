import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import NavBarTop from "../navbar.top";
import Footer from "../footer";

class AddContactView extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    sendInvite() {
        toast("Ciao")
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <NavBarTop auth={this.props.auth} {...this.props} />
                <ToastContainer hideProgressBar newestOnTop />
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <ControlLabel>Add new contact</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="email"
                            onChange={this.handleChange}
                        />
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="name"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <Button bsStyle="primary" className="btn-margin" onClick={this.sendInvite.bind(this)}>
                            Send invite
                        </Button>
                        <HelpBlock>...</HelpBlock>
                    </FormGroup>
                </form>
                <Footer />
            </div>
        )
    }
}

export default AddContactView