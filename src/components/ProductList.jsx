import {   Container, Divider, Heading, SimpleGrid, Skeleton } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProductApi } from '../redux/products/actions';
import Oops from './Oops';
const ProductList = () => {
    const [searchParams]=useSearchParams();
    const isLoading=useSelector((state) => state.productReducer.isLoading)
    const isError=useSelector((state) => state.productReducer.isError)
    const data=useSelector((state) => state.productReducer.data)||[]
   // const {isLoading,isError ,data } = useSelector((state) => state.productReducer);
    const location=useLocation();
      const dispatch=useDispatch();
      const order=searchParams.get('sortBy');
    const urlcategory=searchParams.getAll('category');

order!=='desc'&&data?.length!==0?data?.sort((a, b) => a.price - b.price):data?.sort((a, b) => b.price - a.price);

      useEffect(()=>{
        
        //   const getparams={
        //           params:{
        //                   type:searchParams.getAll('category'),
        //                   _sort:urlSort&&'price',
        //                   _order:urlSort
        //               }
        //           }
        const getparams={
            type:urlcategory,
        }
          if(data?.length===0||location?.search||urlcategory?.length===0){
              dispatch(getProductApi(getparams))
            }
       
    },[location.search,dispatch,searchParams]);
  
    console.log(data);
    return (
      <Container maxW='full'p='20px' pb='100px'>
<Heading color='brand.700'>Products</Heading>
<Divider my='10px' borderColor='brand.500' />
        <SimpleGrid columns={[1,2,2,3,4]} spacing={10}    >
        {isLoading?[0,0,0,0,0,0,0,0,0,0].map((val,i)=><Skeleton key={i} margin='auto'  borderRadius='10px'  height='250px' width='250px'/>)
        :isError?<Oops/>:data?.length>0 && data?.map((data) => {
          return (
            <ProductCard key={data.docid} data={data}/>
            );
          })}
      </SimpleGrid>
          </Container>
    );
};

export default ProductList;