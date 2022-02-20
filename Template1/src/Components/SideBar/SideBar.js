import React from 'react'
import {SidebarContainer, Icon,CloseIcon,SidebarMenu, SidebarLink, SideBtnWrap, SideBarRoute} from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
  return (
   <>
   <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
           <CloseIcon/>
       </Icon>
       <SidebarMenu>
           <SidebarLink to='/'>Burger</SidebarLink>
           <SidebarLink to='/'>Desserts</SidebarLink>
           <SidebarLink to='/'>Veg Burger</SidebarLink>
           <SidebarLink to='/'>Non-Veg Burger</SidebarLink>
       </SidebarMenu>
       <SideBtnWrap>
           <SideBarRoute to='/'>Order Now</SideBarRoute>
       </SideBtnWrap>
   </SidebarContainer>
   </>
  );
};

export default SideBar