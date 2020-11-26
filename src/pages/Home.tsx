import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AlertProvider from '../contexts/AlertContext';
import SidebarProvider from '../contexts/SidebarContext';
import MainContainers from '../components/containers/main_containers/MainContainers';
import ToastAlert from '../components/shared/Alert';
import './Home.css';
import Login from './Login/Login';
import { AuthContext } from '../contexts/AuthContext';

const Home = (): JSX.Element => {
  const authContext = useContext(AuthContext);
  return (
    <div className="home">
      <Router>
        <AlertProvider>
          {authContext.token && authContext.username ? (
            <SidebarProvider>
              <MainContainers>
                <ToastAlert />
              </MainContainers>
            </SidebarProvider>
          ) : (
            <Login />
          )}
        </AlertProvider>
      </Router>
    </div>
  );
};

export default Home;
