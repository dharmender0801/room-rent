import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import SearchComp from './Component/Search';
import Login from './Component/Login';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './Default/DefaultLayout';

function App() {
  return (
    <>
      <Routes key={'r-2'}>
        <Route path='/login' element={<Login />} >
        </Route>
      </Routes>
      <Routes key={'r-1'}>
        <Route key={'private-routs'} element={<DefaultLayout />} >
          <Route key={'pt-r-2'} path={"/"} element={<SearchComp />} />

        </Route>
      </Routes>



      {/* <Login /> */}

      {/* <NavBar />
      
      <SearchComp /> */}
    </>
  );
}

export default App;
