import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import NavBar from './index';
import userEvent from '@testing-library/user-event';

const handleOpenUserMenu = jest.fn();
const handleCloseNavMenu = jest.fn();
const handleOpenNavMenu = jest.fn();
const handleCloseUserMenu = jest.fn();
const setAnchorElNav = jest.fn();
const setAnchorElUser = jest.fn();

describe('NavBar Page should be render as expected', () => {
    render(<NavBar />)
    it('NavBar page should be renderer', () => {
        const button = screen.getByRole("home-label-button");
        act(() => fireEvent.click(button));
        expect(handleCloseNavMenu).toHaveBeenCalled(1);
        expect(setAnchorElNav).toHaveBeenCalled(1);
    })
    it('handleOpenUserMenu sholud be called', () => {
        const button = screen.getByRole("menu-button");
        act(() => fireEvent.click(button));
        expect(handleOpenUserMenu).toHaveBeenCalled(1);
        expect(setAnchorElUser).toHaveBeenCalled(1);
    })
    it('handleOpenNavMenu should be called', () => {
        const button = screen.getByRole("iconButton");
        act(() => fireEvent.click(button));
        expect(handleOpenNavMenu).toHaveBeenCalled(1);
        expect(setAnchorElNav).toHaveBeenCalled(1);
    })
    it('should navigate to home page when Home link is clicked', () => {
        const homeLink = screen.getByRole('home-label-button');
        act(() => userEvent.click(homeLink));
        expect(window.location.pathname).toBe('/');
    });
    it('handleOpenNavMenu should be called',  () => {
    const button = screen.getByRole("menu-button");
    act(() => fireEvent.click(button));
    expect(handleCloseUserMenu).toHaveBeenCalled(1);
    expect(setAnchorElUser).toHaveBeenCalled(1);
    })
})

