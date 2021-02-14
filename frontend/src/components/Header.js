import React from 'react'
// import { LinkContainer } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch,useSelector }  from 'react-redux'
import { logout } from '../actions/userActions.js'

import {Container,Col,Row,Navbar,Nav,NavDropdown} from 'react-bootstrap'

const Header = () => {
  const usedispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const logoutHandler = ()=>{
    logout()
  }   
    return( 
  


        <header>
<Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect> 
<Container>
  <LinkContainer to='/'>
  <Navbar.Brand>ProShop</Navbar.Brand>
  </LinkContainer>
    

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <LinkContainer to='/cart'>
      <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
      </LinkContainer> 
       {userInfo ? (
        <NavDropdown title={userInfo.name} id='username'>
          <LinkContainer to='/profile'>
          <NavDropdown.Item>
            Profile
          </NavDropdown.Item>
          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
       ):
       <LinkContainer to='/login'>
        <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link> 
      </LinkContainer>
      }


    </Nav>
</Navbar.Collapse>

  </Container>
</Navbar>
       </header>
    ) 
}

export default Header


{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" color="white" >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown> */}
