import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRegister from '../pages/AdminRegister';
import AdminLogin from '../pages/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Products from '../pages/Products';
import SingleProduct from '../pages/SingleProduct';
import CartPage from '../pages/CartPage';
import RequireAdminAuth from '../hofs/RequireAdminAuth';
import RequireUserAuth from '../hofs/RequireUserAuth';
import PaymentPage from '../pages/PaymentPage';

import UserOrdersPage from '../pages/UserOrdersPage';

const MainRoutes = () => {
  
    return (
        <Routes>
            <Route path='/'element={<HomePage/>}/>
            <Route path='/adminregister'element={<AdminRegister/>}/>
            <Route path='/adminlogin'element={<AdminLogin/>}/>
            <Route path='/userregister'element={<RegisterPage/>}/>
            <Route path='/userlogin'element={<LoginPage/>}/>
            <Route path='/admindashboard'element={<RequireAdminAuth><AdminDashboard/></RequireAdminAuth>}/>
            <Route path='/products'element={<Products/>}/>
            <Route path='/singleproduct/:id'element={<SingleProduct/>}/>
            <Route path='/cart'element={<RequireUserAuth><CartPage/></RequireUserAuth>}/>
            <Route path='/payment'element={<RequireUserAuth><PaymentPage/></RequireUserAuth>}/>
            <Route path='/orders'element={<RequireUserAuth><UserOrdersPage/></RequireUserAuth>}/>
        </Routes>
    );
};

export default MainRoutes;