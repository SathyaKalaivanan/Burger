import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './NavigationElements'

const Navigation = ({ toggle }) => {
  return (
      <>
       <Nav>
           <NavLink to='/'>Burger</NavLink>
           <NavIcon onClick={toggle}>
               <p>Menu</p>
               <Bars />
           </NavIcon>
       </Nav>
      </>
  
  );
};

export default Navigation;