import React from "react";
// import './App.css'
import {Link} from 'react-router-dom'
import Contact from "./Contact";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
function Home() {
  return (
    <>
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <div className="card">
    <Card className="bg-dark text-white">
      <Card.Img src="https://images7.alphacoders.com/411/411820.jpg"  className="img" alt="Card image" />
      
     
      <Link to="/contact"> <p id="text">To Enter Your Details Go To Contact Page!!</p></Link>
    </Card>
    </div>
    </>
  )
}

export default Home;