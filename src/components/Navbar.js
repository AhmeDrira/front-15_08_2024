// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo><StyledLink to="/">ReportCraft</StyledLink></Logo>
        <NavList>
          <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
          <NavItem><StyledLink to="/profile">Profil</StyledLink></NavItem>
          <NavItem><StyledLink to="/admin">Admin Dashboard</StyledLink></NavItem>
        </NavList>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed; /* Rendre la navbar fixe */
  top: 0; /* Positionner la navbar en haut */
  left: 8px; /* Positionner la navbar à gauche */
  width: 100%; /* Occupant toute la largeur */
  z-index: 2; /* Assure que la Navbar est au-dessus de la Sidebar */
  background: linear-gradient(135deg, #800000, #FF4500);
  color: #fff;
  padding: 10px 0;
  transition: background 0.3s ease; /* Ajoutez une transition pour l'animation du fond */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.h1`
  margin: 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
  cursor: pointer;
  transition: transform 0.2s ease; /* Ajoutez une transition pour l'animation de survol */

  &:hover {
    transform: translateY(-2px); /* Déplace légèrement l'élément vers le haut au survol */
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.2s ease; /* Ajoutez une transition pour le changement de couleur et la transformation */

  &:hover {
    color: #FFFF99; /* Change de couleur au survol */
    transform: scale(1.1); /* Agrandit légèrement l'élément au survol */
  }
`;

export default Navbar;
