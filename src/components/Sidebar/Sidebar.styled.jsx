import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as logoIcon } from '../../icons/logo.svg';

export const SidebarWrap = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 46px;
  padding: 14px 18px;
  background-color: ${p => p.theme.colors.sectionBackgroundColor};
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLogo = styled(logoIcon)`
  width: 40px;
  height: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavItem = styled.ul`
  border-radius: 50%;
`;

export const NavItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 50%;
  /* fill: ${p => p.theme.colors.inputTextColor}; */
  stroke: ${p => p.theme.colors.inputTextColor};
  background-color: ${p => p.theme.colors.navBackgroundColor};
  transition: stroke ${p => p.theme.transition},
    background-color ${p => p.theme.transition};

  &:hover,
  &:focus {
    /* fill: ${p => p.theme.colors.primaryTextColor}; */
    stroke: ${p => p.theme.colors.primaryTextColor};
    background-color: ${p => p.theme.colors.accentСolor};
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;
