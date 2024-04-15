import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterLinks>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/terms">Terms of Use</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
        </FooterLinks>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0 10px;

  &:hover {
    color: #ff8c00;
  }
`;

export default Footer;
