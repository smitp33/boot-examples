import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Nav, NavItem, Glyphicon, Navbar,
        FormGroup, FormControl} from 'react-bootstrap'
import AvatarCard from './common/AvatarCard'
import { Link, Switch, Route, withRouter} from 'react-router-dom';
import DashBoardPage from './dashboard/DashBoardPage'
import ApplicationsPage from './applications/ApplicationsPage'
import NoMatch from './common/NoMatch'


class App extends Component {


  handleSelect = (selectedKey) => {
    // Placeholder function
  }

  render() {

    return (
      <div className="App">

        <Grid fluid={true}>
          <Row>

            <Col sm={12} md={12} lg={12}>

              <Navbar collapseOnSelect fluid={true}>
                <Row>
                  <Col sm={2} md={2} lg={2}>

                    <Navbar.Header >

                      <span>
                        <i style={{marginTop: '10px'}} className="fa fa-bullseye fa-2x">
                          &nbsp;APPNAME
                        </i>
                      </span>

                      <Navbar.Toggle />

                    </Navbar.Header>

                  </Col>

                  <Col sm={10} md={10} lg={10} >
                    <Navbar.Collapse>
                      <Nav>

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

                        <NavItem eventKey={99} href="#">

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
            <Col className="sidebar" sm={2} md={2} lg={2} >
              &nbsp;
              &nbsp;
              <Nav bsStyle="pills" stacked activeKey={this.props.location.pathname} onSelect={this.handleSelect}>
                <AvatarCard style={{ marginTop: '5px', marginLeft: '10px'}} width='40px' avatar_url="https://avatars3.githubusercontent.com/u/810438?s=60&amp;v=4"
                            name="Philip Smith" message="Welcome" notifications={3}/>
                <hr style={{ marginLeft: '10px', marginRight: '10px'}}/>
                &nbsp;
                <NavItem eventKey="/" ><i className="fa fa-dashboard fa-lg"/><Link to='/'>&nbsp;&nbsp;&nbsp;DASHBOARD</Link></NavItem>
                &nbsp;
                <NavItem eventKey="/applications" ><i className="fa fa-th fa-lg"/><Link to='/applications'>&nbsp;&nbsp;&nbsp;APPLICATIONS</Link></NavItem>
                <NavItem eventKey="/apis" ><i className="fa fa-arrows-h fa-lg"/><Link to='/apis'>&nbsp;&nbsp;&nbsp;APIs</Link></NavItem>
                <NavItem eventKey={4} ><i className="fa fa-plus-circle fa-lg"/>&nbsp;&nbsp;&nbsp;NEW APPLICATION</NavItem>
              </Nav>




            </Col>

            <Col sm={10} md={10} lg={10}>
              <Switch>
                <Route exact path="/" component={DashBoardPage}/>
                <Route path="/applications" component={ApplicationsPage}/>
                <Route component={NoMatch}/>
              </Switch>
            </Col>
          </Row>
          <Row>
            <Col className="footer" sm={12} md={12} lg={12}>Footer</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(App);
