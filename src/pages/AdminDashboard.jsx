import {  Tabs, TabList, TabPanels, Tab, TabPanel, Container, Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import AdminProductView from '../components/AdminProductView';
import CreateUpdateForm from '../components/CreateUpdateForm';
import OrdersList from '../components/OrdersList';
import { signoutAdminApi } from '../redux/adminAuth/action';

const AdminDashboard = () => {
  
const dispatch=useDispatch();



    return (
        <Tabs variant='soft-rounded'size='lg' isFitted colorScheme='orange' margin={['10px','10px','20px','30px','50px']} maxW='full'>
  <TabList>
    <Tab>All Products</Tab>
    <Tab>Create Product</Tab>
    <Tab>Orders</Tab>
  </TabList>

  <TabPanels  maxW='full'>
    <TabPanel>
      <AdminProductView/>
    </TabPanel>
    <TabPanel>
      <CreateUpdateForm type={'Create'}/>
    </TabPanel>
    <TabPanel>
      <OrdersList/>
    </TabPanel>
  </TabPanels>
</Tabs>
    );
};

export default AdminDashboard;