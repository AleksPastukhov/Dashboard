import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(28 / 20);
  text-transform: uppercase;
  width: 100%;
`;
export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
export const Icon = styled.svg`
  background-color: ${p => p.theme.colors.sectionBackgroundColor};
  padding: 6px;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: calc(20 / 14);
`;
