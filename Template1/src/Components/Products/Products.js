import React from 'react'
import ProductsData from './ProductsData'
import {ProductContainer, 
    ProductHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton} from './ProductElements'

const Products = ({heading,Data}) => {
  return (
   <>
   <ProductContainer>
       <ProductHeading>{heading}</ProductHeading>
       <ProductWrapper>
           {Data.map((product, index) => {
                   return(
                       <ProductCard key={index}>
                           <ProductImg src={product.img} alt={product.alt}/>
                           <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.btn}</ProductButton>
                           </ProductInfo>
                       </ProductCard>
                   );
               })
           }
       </ProductWrapper>
   </ProductContainer>
   </>
  )
}

export default Products