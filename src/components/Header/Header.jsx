import sprite from '../../icons/sprite.svg';
import {
  HeaderContainer,
  Title,
  UserInfo,
  Icon,
  UserName,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Dashboard</Title>
      <UserInfo>
        <Icon width="36" height="36">
          <use href={`${sprite}#user_light`}></use>
        </Icon>
        <UserName>Username</UserName>
      </UserInfo>
    </HeaderContainer>
  );
};
