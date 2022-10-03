
import {  Container, SimpleGrid, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getProductApi } from '../redux/products/actions';
import AdminViewCard from './AdminViewCard';
import Oops from './Oops';

const AdminProductView = () => {
    const isLoading=useSelector((state) => state.productReducer.isLoading)
    const isError=useSelector((state) => state.productReducer.isError)
    const data=useSelector((state) => state.productReducer.data)||[]
    const dispatch=useDispatch();

    useEffect(()=>{
        let params={
            type:[],
        }
        if(data?.length===0){
            dispatch(getProductApi(params))
          }
    },[dispatch])
   
  
    console.log(data);
    return (<Container maxH='100vh' maxW='100%' overflow='scroll'>

        <SimpleGrid columns={[1,2,3,4]} spacing={2}  >
        {isLoading?[0,0,0,0,0,0,0,0,0,0].map((val,i)=><Skeleton key={i} margin='auto'  borderRadius='10px'  height='200px' width='200px'/>)
        
        :isError?<Oops/>:data.length>0 && data.map((data) => {
            return (
                <AdminViewCard key={data.docid} data={data}/>
                );
            })}
      </SimpleGrid>
            </Container>
    );
};

export default AdminProductView;