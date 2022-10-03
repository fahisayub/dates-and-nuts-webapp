import { Container, Divider, Heading, Skeleton } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Oops from '../components/Oops';
import OrderUserCard from '../components/OrderUserCard';
import { getUserOrdersApi } from '../redux/orders/actions';

const UserOrdersPage = () => {
    const isLoading =  useSelector(state=>state.ordersReducer.isLoading);
    const isError = useSelector((state) => state.ordersReducer.isError);
    const orderItems = useSelector((state) => state.ordersReducer.userOrders) || [];

const dispatch=useDispatch();
    useEffect(()=>{
        if(orderItems?.length === 0){

            dispatch(getUserOrdersApi())
        }
    },[dispatch,orderItems?.length])

    return (
        <Container maxW='80%' padding='20px' boxShadow='base' marginTop='20px'>
            <Heading size='lg'>My Orders</Heading>
            <Divider m='10px'/>
            {isLoading? <Skeleton
            margin="auto"
            borderRadius="10px"
            height="200px"
            width="full"
            colorScheme='orange'
          />:isError?<Oops/>:orderItems?.map((item)=>{
                return (<OrderUserCard key={item.orderid} item={item}/>)
            })}
        </Container>
    );
};

export default UserOrdersPage;