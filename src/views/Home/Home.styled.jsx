// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  max-width: 1920px;
  padding-right: 48px;
  background-color: ${p => p.theme.colors.backgroundColor};
  margin: 0 auto;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1756px;
`;
