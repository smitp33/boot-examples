import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'

class App extends Component {

  handleSelect = (selectedKey) => {
    alert(`selected ${selectedKey}`);
  }



  render() {
    return (
      <div className="App">

        <Grid fluid={true}>
          <Row style={{ backgroundColor: 'lightblue'}}>

            <Col sm={2} md={2} lg={2}>
              <span>
                  <i className="fa fa-bullseye fa-lg">
                   &nbsp;ENTRAL
                  </i>
              </span>
            </Col>

            <Col sm={6} md={8} lg={8}>
              <span>
                  <i className="fa fa-search fa-lg">
                   &nbsp;Search for an Application, API or person
                  </i>
              </span>
            </Col>

            <Col sm={2} md={2} lg={2} style={{textAlign: 'right'}}>
              <span>
                  <i className="fa fa-cog fa-lg" />
              </span>
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
