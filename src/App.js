import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import './styles/Main.scss';
import Orders from './components/Orders';
import AddOrder from './components/AddOrder'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Online Ordering',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Create', path: '/create'},
        {title: 'Edit', path: '/edit'}
      ],
      home: {
        title: 'orders',
        subTitle: 'sample',
        text: 'sample'
      },
      create: {
        title: 'sample'
      },
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Online Ordering </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/addorder">Create</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path='/' component={Orders} exact/>
            <Route path='/addorder' component={AddOrder} />
          </Switch>
        </Container>

      </Router>
    );
  }
}

export default App;




