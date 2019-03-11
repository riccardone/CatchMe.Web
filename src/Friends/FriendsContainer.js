import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import FriendsView from "./FriendsView";
import AddContactButtonView from "./AddContactButtonView";
import NavBarTop from "../navbar.top";
import Footer from "../footer";
import avatar from "../images/avatar.png"

// This is just a placeholder for a real request
const fetchFriends = cb =>
    cb([
        // { id: "123", name: "riccardo", icon: { avatar } },
        // { id: "456", name: "jessica", icon: { avatar } }
    ]);

class FriendsContainer extends Component {
    state = { friends: [] };
    componentDidMount() {
        if (!this.props.auth.isAuthenticated()) {
            this.props.history.replace(`/home`);
        }
        fetchFriends(friends =>
            this.setState({ friends: friends }));
    }
    render() {
        return (
            <div>
                <NavBarTop auth={this.props.auth} {...this.props} />
                <ToastContainer hideProgressBar newestOnTop />
                <AddContactButtonView addContact={this.props.history.replace} />
                <FriendsView friends={this.state.friends} />
                <Footer />
            </div>
        );
    }
}

export default FriendsContainer