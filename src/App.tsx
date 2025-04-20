import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import SearchComp from './Component/Search';
import Login from './Component/Login';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './Default/DefaultLayout';
import AddProp from './Component/AddProperty';
import { ToastContainer } from 'react-toastify';
import Signup from './Component/Signup';
import ResetPassword from './Component/ResetPassword';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes key={'r-2'}>
        <Route path='/login' element={<Login />} >
        </Route>
        <Route path='/sign-up' element={<Signup />} >
        </Route>
        <Route path='/reset-password' element={<ResetPassword />} >
        </Route>
      </Routes>
      <Routes key={'r-1'}>
        <Route key={'private-routs'} element={<DefaultLayout />} >
          <Route key={'pt-r-2'} path={"/"} element={<SearchComp />} />
          <Route key={'pt-r-2'} path={"/add-property"} element={<AddProp />} />


        </Route>
      </Routes>



      {/* <Login /> */}

      {/* <NavBar />
      
      <SearchComp /> */}
    </>
  );
}

export default App;
