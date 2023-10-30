import React, { useEffect, useState } from 'react';
import {NavLink as ReactLink, useNavigate} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { doLogout, getUserDetails, isLoggedIn, logout } from '../utilities/common';
const CustomNavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);  

    const [login,setLogin]=useState(false);
    const [user,setUser] =useState(undefined);
    const navigate=useNavigate();

    useEffect(()=>{
      setLogin(isLoggedIn());
      setUser(getUserDetails());
     
    },[]
    )

    const logout=()=>{
      doLogout(()=>{
        setLogin(false)
        navigate("/")

      })
    }
    
    return (
     
      <div>
        <Navbar 
        color="dark"
        dark
        expand="md"
        fixed=""        
        className='px-5'
        >
          <NavbarBrand tag={ReactLink} to="/">MyBlogs</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              
              <NavItem>
                <NavLink tag={ReactLink} to="/">
                  Home
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink tag={ReactLink} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/services">
                  Services
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                 <DropdownItem  tag={ReactLink} to="/contact">Contact Us</DropdownItem>
                  <DropdownItem target="_blank" tag={ReactLink} to="https://theprint.in/">News</DropdownItem>
                  <DropdownItem target="_blank" tag={ReactLink} to="https://github.com/nikhilkputhran">GitHub</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>

            <Nav navbar>
        

              {
                
                login &&(
                  <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/dashboard">{user.email}</NavLink>
                </NavItem>
                <NavItem>
                      <NavLink tag={ReactLink} to="/user/profile-info">Profile Info</NavLink>

                       </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>Logout</NavLink>
               </NavItem>
            
              </>
                )
              }

              {
                  !login && (
                    <>
                       <NavItem>
                      <NavLink tag={ReactLink} to="/login">Login</NavLink>
                       </NavItem>
                        <NavItem>
                        <NavLink tag={ReactLink} to="/signup">Signup</NavLink>
              </NavItem>
                    </>
                  )
              }
             
            </Nav>
           
           </Collapse>
        </Navbar>
      </div>
    );  
}
export default CustomNavBar
