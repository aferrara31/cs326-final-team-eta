import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

describe('navbar renders properly', () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  it('when navbar is rendered, it is visible to the ui', () => {
    const navBar = screen.getByTestId('navbar');
    expect(navBar).toBeVisible();
  });

  it('when navbar is rendered, the correct numver of icons are present', () => {
    const navBar = screen.getByTestId('navbar');
    const numButtons = navBar.children.length;
    expect(numButtons).toEqual(4);
  });

  it('when navbar is rendered, the children rendered are navbar buttons', () => {
    const navBar = screen.getByTestId('navbar');
    const buttons = Array.from(navBar.children);
    buttons.forEach(button => expect([...button.classList].includes('navbar-button')).toBeTruthy());
  });

  it('when navbar is rendered, the correct buttons are displayed', () => {
    const navBar = screen.getByTestId('navbar');
    const buttons = Array.from(navBar.children);
    const expectedIds = ['navbar-forum-button', 'navbar-learn-button', 'navbar-home-button', 'navbar-profile-button'];
    const receivedIds = buttons.map(button => button.getAttribute('id'));
    expect(expectedIds).toEqual(receivedIds);
  })
});
