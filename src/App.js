import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Jumbotron } from 'react-bootstrap';
import About from './components/About.js';
import Content from './components/Content.js';
import Members from './components/Members.js';
import Items from './components/Items.js';
import Projects from './components/Projects.js';
import Tasks from './components/Tasks.js';


class App extends Component {
  render() {
    return (
      <div>
      <Navbar bg="light" expand="lg">
        <Router>
          <Route path="/about/" component={About} />
          <Route path="/members/" component={Members} />
          <Route path="/content/" component={Content} />
          <Route path="/projects/" component={Projects} />
          <Route path="/tasks/" component={Tasks} />
          <Route path="/items/" exact component={Items} />
        </Router>
        <Navbar.Brand href="/">
          {'CRE8'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/members">Members</Nav.Link>
            <Nav.Link href="/content">Content</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/tasks">Tasks</Nav.Link>
            <Nav.Link href="/items">Items</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Go</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron>
        <h1>Let's collaborate!</h1>
        <br></br>
        <p>
          <Button variant="primary">Get Started</Button>
        </p>
      </Jumbotron>
      </div>
    )
  }
}

export default App;
