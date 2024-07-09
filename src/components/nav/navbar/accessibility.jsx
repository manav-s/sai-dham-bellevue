import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const DonateButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #f57c00; /* Orange color */
  background-image: linear-gradient(to right, #f57c00 0%, #ff5722 100%); /* Orange to Red gradient */
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #ff5722; /* Red color */
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const VolunteerButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #f57c00; /* Orange color */
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #f57c00; /* Orange color */
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      {/*<DonateButton>Donate</DonateButton>
      <VolunteerButton>Volunteer</VolunteerButton>*/}
    </AccessibilityContainer>
  );
}