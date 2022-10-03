import {  Container, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersApi } from '../redux/orders/actions';
import Oops from './Oops';
import OrdersAdminCard from './OrdersAdminCard';

const OrdersList = () => {
    const isLoading =  useSelector(state=>state.ordersReducer.isLoading);
    const isError = useSelector((state) => state.ordersReducer.isError);
    const orderItems = useSelector((state) => state.ordersReducer.allOrders) || [];

const dispatch=useDispatch();
    useEffect(()=>{
        if(orderItems?.length === 0){

            dispatch(getAllOrdersApi())
        }
    },[dispatch,orderItems?.length])

    return (
        <Container maxW='70%'>
            {isLoading? <Skeleton
            margin="auto"
            borderRadius="10px"
            height="200px"
            width="full"
            colorScheme='orange'
          />:isError?<Oops/>:orderItems?.map((item)=>{
                return (<OrdersAdminCard key={item.orderid} item={item}/>)
            })}
        </Container>
    );
};

export default OrdersList;