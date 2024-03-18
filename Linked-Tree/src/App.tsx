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
import PrivateRoute from './Components/Utils/PrivateRoute';

function App()
{

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/LinkTree/:uid' element={<LinkTreeMain />} />
      <Route path='/Hawkeye' element={<Hawkeye />} />
      <Route path='/hawkRegister' element={<HawkRegister />} />
      <Route path='Completed' element={<HawkRegisterComplete />} />


      <Route element={<PrivateRoute />}>
        <Route path='/Account' element={<MainProfile />} >
          <Route path='CreatUrl' element={<CreateRedirect />} />
        </Route>
      </Route>


      <Route path='*' element={<Home />} />

    </Routes>


  );
}

export default App;
