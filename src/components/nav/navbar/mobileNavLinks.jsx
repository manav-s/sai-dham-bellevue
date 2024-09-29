import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
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
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: absolute;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <StyledLink to="/sai-baba">SaiBaba</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/guruji">Guruji</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/Pictures">Gallery</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/AboutUs">About us</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/contact">Contact</StyledLink>
          </LinkItem>
          <LinkItem>
            <a href="https://www.saiparivarfoundation.org/TempleParking.pdf" target="_blank" rel="noreferrer">
              Event Parking
            </a>
          </LinkItem>
          <LinkItem>
            <a href="https://www.paypal.com/paypalme/SaiParivarFoundation" target="_blank" rel="noreferrer">
              Donate
            </a>
          </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}