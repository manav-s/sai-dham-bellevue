import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;


export function NavLinks() {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <StyledLink to="/sai-baba">Sai Baba</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/guruji">Guruji</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/Pictures">Events</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/AboutUs">About us</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/contact">Contact us</StyledLink>
        </LinkItem>
        <LinkItem>
          <a href="https://www.saiparivarfoundation.org/TempleParking.pdf" target="_blank">
            Event Parking
          </a>
        </LinkItem>
        <LinkItem>
          <a href="https://www.paypal.com/paypalme/SaiParivarFoundation" target="_blank">
            Donate
          </a>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}