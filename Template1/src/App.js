import React, { Fragment } from 'react'; 
import { BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import HomeIndex from './Components/Home/HomeIndex'
import Products from './Components/Products/Products';
import {ProductsData, ProductsDataTwo} from './Components/Products/ProductsData';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
// import Navbar from './Components/ShrinkReactNavigation';
function App() { 
  return ( 
    <>
      <Router>
        <GlobalStyle />
          <HomeIndex/>
          <Products heading='Choose your Favorite' Data={ProductsData}/>
          <Features/>
          <Products heading='Choose your Favorite Veg-Burger' Data={ProductsDataTwo}/>
          <hr>
          
          </hr>
          <Footer/>
      </Router>
        
     

    </>
   
      
    //   <Fragment>
    //  {/* <Navbar
    //  />
    //    <div style={{overflowY:"scroll", height:"800px"}}></div>  */}
    // </Fragment>
  ); 
} 
    
export default App;