import React,{useState} from 'react'
import {HomeIndexContainer, HomeContent, HomeItem, HomeH1, HomeP,HomeBtn} from './HomeIndexElements'
import Navigation from '../Navbar/Navigation'
import SideBar from '../SideBar/SideBar'


const HomeIndex = () =>  {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
   <>
   <HomeIndexContainer>
       <Navigation toggle={toggle}/>
       <SideBar isOpen={isOpen} toggle={toggle}/>
       <HomeContent>
           <HomeItem>
               <HomeH1>Greatest Burger Ever</HomeH1>
               <HomeP>Ready in 5 minutes</HomeP>
               <HomeBtn>Place Order</HomeBtn>
           </HomeItem>
       </HomeContent>
   </HomeIndexContainer>
   </>
  )
}

export default HomeIndex