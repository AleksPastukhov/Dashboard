import sprite from '../../icons/sprite.svg';

import {
  SidebarWrap,
  Nav,
  Logo,
  StyledLogo,
  NavList,
  NavItem,
  Icon,
  NavItemLink,
} from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <SidebarWrap>
      <Logo to="/home">
        <StyledLogo />
      </Logo>
      <Nav>
        <NavList>
          <NavItem>
            <NavItemLink>
              <Icon>
                <use href={`${sprite}#dashboard`}></use>
              </Icon>
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>
              <Icon width="24" height="24">
                <use href={`${sprite}#cards`}></use>
              </Icon>
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>
              <Icon width="24" height="24">
                <use href={`${sprite}#product`}></use>
              </Icon>
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>
              <Icon width="24" height="24">
                <use href={`${sprite}#wear-tear`}></use>
              </Icon>
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>
              <Icon width="24" height="24">
                <use href={`${sprite}#game`}></use>
              </Icon>
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>
              <Icon width="24" height="24">
                <use href={`${sprite}#settings`}></use>
              </Icon>
            </NavItemLink>
          </NavItem>
        </NavList>
      </Nav>
    </SidebarWrap>
  );
};
