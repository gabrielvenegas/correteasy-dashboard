import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AlertProvider from '../contexts/AlertContext';
import SidebarProvider from '../contexts/SidebarContext';
import MainContainers from '../components/containers/main_containers/MainContainers';
import ToastAlert from '../components/shared/Alert';
import './Home.css';
import Login from './Login/Login';

const Home = (): JSX.Element => (
  <div className="home">
    <Router>
      <AlertProvider>
        {/* <SidebarProvider>
          <MainContainers>
            <ToastAlert />
          </MainContainers>
        </SidebarProvider> */}
        <Login />
      </AlertProvider>
    </Router>
  </div>
);

export default Home;
