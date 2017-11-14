import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'

class App extends Component {

  handleSelect = (selectedKey) => {
    alert(`selected ${selectedKey}`);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <Grid fluid={true}>
          <Row>
            <Col sm={10} md={10} lg={10}>
              <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
              <NavItem disabled={true}>
                Hello
              </NavItem>
              <NavItem>
                <Glyphicon glyph="home" />
              </NavItem>
              <NavItem eventKey={0}>
                <Glyphicon glyph="home" />
              </NavItem>
                <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              </Nav>
            </Col>
            <Col sm={2} md={2} lg={2}>
              <Nav bsStyle="pills" pullRight={true} activeKey={1} onSelect={this.handleSelect}>
                <NavItem eventKey={3}>
                  <Glyphicon glyph="align-left" />
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col sm={2} md={1} lg={1}>2</Col>
            <Col sm={4} md={2} lg={2}>1</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
