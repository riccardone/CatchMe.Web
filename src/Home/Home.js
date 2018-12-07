import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import Footer from '../footer';
import './home.css';
import LogoImg from "../images/catchme_logo_welcome_fb_color_small.png";

class Home extends Component {
  constructor(props) {
    super(props);
    // preserve the initial state in a new object
    this.baseState = this.state;
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {/* <NavBarTop auth={this.props.auth} {...this.props} /> */}
        <div className="container home">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12} xl={12}>
                <span><img src={LogoImg} alt="CatchMe" /></span>
              </Col>
              <Col xs={12} md={12} xl={12}>
                <h4>Find your friends</h4>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {
                  !isAuthenticated() && 
                    <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.login.bind(this)}
                    >
                      Log In
                  </Button>
                  
                }
                {
                  isAuthenticated() && 
                    <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.goTo.bind(this, 'map')}
                    >
                      Map
            </Button>
                    //   <Button
                    //     bsStyle="primary"
                    //     className="btn-margin"
                    //     onClick={this.logout.bind(this)}
                    //   >
                    //     Log Out
                    // </Button>
                  
                }
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
