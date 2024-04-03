//import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Homescreen/Home';
import LinkTreeMain from './Components/LinkTreeMain/LinkTreeMain';
import CreateRedirect from './Components/Profile/AddRedirect/Redirect';
import MainProfile from './Components/Profile/Profile-MainPage/MainProfile';
import Hawkeye from './Components/Hawkeye/Hawkeye_login';
import HawkRegister from './Components/Hawkeye/Hawkeye_Register';
import HawkRegisterComplete from './Components/Hawkeye/Hawkeye_Register_Complete';
import RouteGuard from './Components/Utils/SecurityGuard';
import { IsAuthenticated } from './Components/hooks/is-authenticated';

function App()
{

  const isLoggedIn = IsAuthenticated();


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/LinkTree/:uid' element={<LinkTreeMain />} />


      <Route path='Completed' element={<RouteGuard component={<HawkRegisterComplete />} routeTo={'/account'} isLoggedIn={!isLoggedIn} />} />
      <Route path='/Hawkeye' element={<RouteGuard component={<Hawkeye />} routeTo={'/account'} isLoggedIn={!isLoggedIn} />} />
      <Route path='/hawkRegister' element={<RouteGuard component={<HawkRegister />} routeTo={'/account'} isLoggedIn={!isLoggedIn} />} />



      <Route path='/Account' element={<RouteGuard component={<MainProfile />} routeTo={'/home'} isLoggedIn={isLoggedIn} />} >
        <Route path='CreatUrl' element={<CreateRedirect />} />
      </Route>


      <Route path='*' element={<Home />} />

    </Routes>


  );
}

export default App;
