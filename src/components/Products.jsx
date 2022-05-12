import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Products = ({cat,filters,sort}) => {
 const [products,setProducts] = useState([]);
 const [filterProducts,setFilterProducts] = useState([]);
  useEffect(()=>{
      const getProducts = async()=>{
        try{
          const res = await axios.get(cat?`http://localhost:5000/api/products${cat}`:"http://localhost:5000/api/products");
         // console.log(res);
         setProducts(res.data);
        }catch(err){
          //console.log(err);
        }
      };
      getProducts();
  },[cat])
  useEffect(()=>{
    cat && setFilterProducts(products.filter(item => Object.entries(filters).every(([key,value])=>item[key].includes(value))))
  },[products,cat,filters])
  return (
    <Container>
      {filterProducts.map((item)=><Product item ={item} key={item.id}/>)}
    </Container>
  )
}

export default Products