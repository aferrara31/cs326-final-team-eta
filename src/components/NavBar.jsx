import React from 'react';
import styled from 'styled-components';
import { Chat as ForumButton } from '@styled-icons/material/Chat';
import { School as LearnButton } from '@styled-icons/material/School';
import { Home as HomeButton } from '@styled-icons/material/Home';
import { Person as ProfileButton } from '@styled-icons/material/Person';

const NavBar = ({ className }) => (
  <div className={className} data-testid="navbar">
    <ForumButton className="navbar-button" id="navbar-forum-button" />
    <LearnButton className="navbar-button" id="navbar-learn-button" />
    <HomeButton className="navbar-button" id="navbar-home-button" />
    <ProfileButton className="navbar-button" id="navbar-profile-button" />
  </div>
);

const StyledNavBar = styled(NavBar)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: gray;

  .navbar-button {
    color: white;
    width: 35px;
    height: 35px;
  }
`

export default StyledNavBar;
