import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Nav, NavItem,
        Glyphicon, Navbar, NavDropdown, MenuItem,
        FormGroup, FormControl, Button, InputGroup} from 'react-bootstrap'

class App2 extends Component {

  handleSelect = (selectedKey) => {
    alert(`selected ${selectedKey}`);
  }

  render() {
    return (
      <div className="App">


        <Grid fluid={true}>
          <Row >

            <Col sm={12} md={12} lg={12} >

              <Navbar collapseOnSelect fluid={true}>
                <Row>
                  <Col sm={2} md={2} lg={2} >

                    <Navbar.Header >

                      <Navbar.Brand>
                        <span>
                          <i className="fa fa-bullseye fa-lg">
                            &nbsp;ENTRAL
                          </i>
                        </span>
                      </Navbar.Brand>
                      <Navbar.Toggle />

                    </Navbar.Header>

                  </Col>

                  <Col sm={10} md={10} lg={10} >
                    <Navbar.Collapse>
                      <Nav>
                        <NavItem eventKey={1} href="#">

                        </NavItem>
                        <Navbar.Form pullLeft>

                          <FormGroup>

                            <Glyphicon glyph="search" className="fa-2x"/>
                            &nbsp;
                            <FormControl className="input-large" type="text" placeholder="Search for an Application, API or Person" />

                          </FormGroup>
                          {' '}

                        </Navbar.Form>




                      </Nav>
                      <Nav pullRight>

                        <NavItem eventKey={2} href="#">

                            <i className="fa fa-cog fa-lg" />

                        </NavItem>
                      </Nav>
                    </Navbar.Collapse>
                  </Col>

                </Row>
              </Navbar>
            </Col>

          </Row>
          <Row>
            <Col className="sidebar" sm={2} md={2} lg={2}>Sidebar</Col>

            <Col sm={10} md={10} lg={10}>Main Content</Col>
          </Row>
          <Row>
            <Col className="footer" sm={12} md={12} lg={12}>Footer</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App2;
