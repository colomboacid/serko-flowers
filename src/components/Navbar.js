import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  background-color: #006400;
  color: #fff;
  padding: 10px;
`;

const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
`;

const NavLinkItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLogo>
        <Link to="/">Serko Flowers and Plants</Link>
      </NavLogo>
      <NavLinks>
        <NavLinkItem>
          <NavLink to="/">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/catalog">Catalog</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/about-us">About Us</NavLink>
        </NavLinkItem>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
