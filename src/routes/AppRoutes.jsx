
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/HomePage/Home'
import Login from '../components/Authen/Login'
import About from '../components/AboutUs/About'
import Shop from '../components/Shop/Shop'

import Register from '../components/Authen/Register'
import Forgotpass1 from '../components/Authen/Forgotpass1'
import Product from '../components/Product/Product'
import Blog from '../components/Blog/Blog'
import Cart from '../components/OrderCart/Cart'
import Checkout from '../components/OrderCart/Checkout'
import UserProfile from '../components/UserProfile/UserProfile'
import UserChangePassword from '../components/UserProfile/UserChangePassword'
import UserOrderManagement from '../components/UserProfile/UserOrderManagement'
import UserAddress from '../components/UserProfile/UserAddress'
import UserOrderDetail from '../components/UserProfile/UserOrderDetail'
import BlogDetail from '../components/Blog/BlogDetail'

const AppRoutes = (props) => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/forgotpass1" element={<Forgotpass1 />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail/:id" element={<BlogDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/userchangepassword" element={<UserChangePassword />} />
        <Route path="/userordermanagement" element={<UserOrderManagement />} />
        <Route path="/useraddress" element={<UserAddress />} />
        <Route path="/userorderdetail" element={<UserOrderDetail />} />
        <Route path="*">404 Not Found</Route>

      </Routes>
    </>
  )
}

export default AppRoutes;