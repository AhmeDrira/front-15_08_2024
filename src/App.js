// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import styled from 'styled-components';

const App = () => {
  return (
    <Router>
      <StyledApp>
        <Navbar />
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <AppRoutes />
        </Content>
        <Footer />
      </StyledApp>
    </Router>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 200px;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-top: 80px;
  margin-left: 200px;
`;

export default App;
