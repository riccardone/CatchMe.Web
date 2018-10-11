import React, { Component } from 'react';
import NavBarTop from '../navbar.top';
import Footer from '../footer';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    // preserve the initial state in a new object
    this.baseState = this.state;
  }

  render() {
    return (
      <div>
        <NavBarTop auth={this.props.auth} {...this.props} />
        <div className="container">
          <h1 className="page-title">CatchMe</h1>
          <div className="border-left">
            <h3 className="page-subtitle">Open source Application to share your position with your friends and family</h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
