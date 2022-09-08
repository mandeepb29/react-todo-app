import React from 'react'
import NavItem from './NavItem/NavItem';
import styled from 'styled-components'; 

const Nav = styled.nav`
 display: flex;
 height: ${props => props.mobile ? "auto":"100%"};
`
const Ul = styled.nav`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100%;
 flex-direction: ${props => props.mobile ? "column":"row"} ;
 padding: 0;
 
`

const NavItems = ({mobile, closeMenu}) => {
  return (
    <Nav mobile={mobile}>
        <Ul mobile={mobile}>
            <NavItem link="/" mobile={mobile} clicked={closeMenu}>
                Home
            </NavItem>
            <NavItem link="/todos" mobile={mobile} clicked={closeMenu}>
                Todos
            </NavItem>
        </Ul>
    </Nav>
  )
}

export default NavItems