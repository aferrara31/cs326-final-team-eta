import React from 'react';
import styled from 'styled-components';
import { Chat } from '@styled-icons/material/Chat';
import { School } from '@styled-icons/material/School';
import { Home } from '@styled-icons/material/Home';
import { Person } from '@styled-icons/material/Person';

const NavBar = () => {
  return (
    <div>
      <StyledChat />
      <StyledSchool />
      <StyledHome />
      <StyledPerson />
    </div>
  );
};

const StyledChat = styled(Chat)`
  color: white;
`

const StyledSchool = styled(School)`
  color: white;
`

const StyledHome = styled(Home)`
  color: white;
`

const StyledPerson = styled(Person)`
  color: white;
`

const StyledNavBar = styled(NavBar)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
`

export default StyledNavBar;
