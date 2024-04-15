import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
    return (
      <StyledSidebar>
        <SidebarContent>
          <NavList>
            <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
            <NavItem><StyledLink to="/login">Login</StyledLink></NavItem>
            <NavItem><StyledLink to="/signup">Sign Up</StyledLink></NavItem>
            <NavItem><StyledLink to="/profile">Profil</StyledLink></NavItem>
          </NavList>
        </SidebarContent>
      </StyledSidebar>
    );
  }

const StyledSidebar = styled.div`
  position: fixed;
  top: 100px;
  left: 8px;
  bottom: 40px; /* Réduire la hauteur pour s'arrêter avant le footer */
  width: 130px; /* Réduire la largeur */
  background: linear-gradient(135deg, #800000, #FF4500);
  color: #fff;
  padding: 20px;
  z-index: 1;
  margin-bottom: 20px;
`;



const SidebarContent = styled.div``;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 80px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #FFFF99; /* Change de couleur au survol */
    transform: scale(1.1); /* Agrandit légèrement l'élément au survol */
  }
`;

export default Sidebar;
