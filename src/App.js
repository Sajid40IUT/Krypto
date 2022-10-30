import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Register } from './components/Register/Register.jsx';
import { Login } from './components/Login/Login.jsx';
import { Navbar, Homepage, Exchanges, News, CryptoDetails, Cryptocurrencies } from './components';
import './App.css';


const App = () => {

  const [currentForm, setCurrentForm] = useState('login');
  const [ logstate, setLogstate ] = useState('no');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const toggleLogstate = (state) => {
    setLogstate(state);
  }


  return (
    <div>
      { logstate == 'yes' ?
      <div className='app'>

        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route exact path = "/" element={<Homepage />} />
                        <Route exact path = "/exchanges" element={<Exchanges />} />
                        <Route exact path = "/cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route exact path = "/crypto/:coinId" element={<CryptoDetails />} />
                        <Route exact path = "/news" element={<News />} />
                    </Routes>
                </div>
            </Layout>
        
        <div className='footer'>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022_ 
            <Link to="/">
                Krypto Inc.
            </Link> <br />
            All Rights Reserved.
            </Typography.Title>
            <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
            </Space>
        </div>
       </div> 
      </div> 
      : (
        currentForm == 'login' ? 
        <Login onFormSwitch={toggleForm} onRouteChange={toggleLogstate}/> :
        <Register onFormSwitch={toggleForm} onRouteChange={toggleLogstate}/>
      )
    }
    </div>
  );
}

export default App;
