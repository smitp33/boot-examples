import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Nav, NavItem, Glyphicon, Navbar,
        FormGroup, FormControl} from 'react-bootstrap'
import AvatarCard from './common/AvatarCard'
import { Switch, Route, withRouter} from 'react-router-dom';
import DashBoardPage from './dashboard/DashBoardPage'
import ApplicationsPage from './applications/ApplicationsPage'
import NoMatch from './common/NoMatch'
import {LinkContainer} from 'react-router-bootstrap' // Used to integrate to react-router - replaces native 'Link'
import {NavHr, NavSpacer}  from './common/NavAddComponents'


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


                        <Navbar.Form pullLeft>

                          <FormGroup>

                            <Glyphicon glyph="search" className="fa-2x"/>
                            &nbsp;
                            <FormControl className="input-large" type="text" placeholder="Search for an Application, API or Person" />

                          </FormGroup>
                          {' '}

                        </Navbar.Form>


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


              <Nav bsStyle="pills" stacked activeKey={this.props.location.pathname} onSelect={this.handleSelect}>
                <NavSpacer style={{ height: '10px'}}/>
                <AvatarCard style={{ marginTop: '5px', marginLeft: '10px'}} width='40px' avatar_url="https://avatars3.githubusercontent.com/u/810438?s=60&amp;v=4"
                            name="Philip Smith" message="Welcome" notifications={3}/>
                <NavHr style={{ marginLeft: '10px', marginRight: '10px'}}/>
                <NavSpacer style={{ height: '10px'}}/>
                <LinkContainer to="/" exact={true}>
                  <NavItem eventKey="/" ><i className="fa fa-dashboard fa-lg"/>&nbsp;&nbsp;&nbsp;DASHBOARD</NavItem>
                </LinkContainer>
                <NavSpacer style={{ height: '40px'}}/>
                <LinkContainer to="/applications">
                  <NavItem eventKey="/applications" ><i className="fa fa-th fa-lg"/>&nbsp;&nbsp;&nbsp;APPLICATIONS</NavItem>
                </LinkContainer>
                <LinkContainer to="/apis">
                  <NavItem eventKey="/apis" ><i className="fa fa-arrows-h fa-lg"/>&nbsp;&nbsp;&nbsp;APIs</NavItem>
                </LinkContainer>
                <NavItem eventKey={4} ><i className="fa fa-plus-circle fa-lg"/>&nbsp;&nbsp;&nbsp;NEW APPLICATION</NavItem>
              </Nav>
            </Col>

            <Col sm={10} md={10} lg={10}>
              <Switch>
                <Route exact path="/" component={DashBoardPage}/>
                <Route exact path="/dashboard" component={DashBoardPage}/>
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

// withRouter binds to the routers props to the App so that they can
// be accessed from within this components
// - Alternative would be to do via Redux
export default withRouter(App);
