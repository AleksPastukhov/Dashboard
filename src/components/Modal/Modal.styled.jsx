import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  left: 1424px;
  top: 52px;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
  width: 300px;
  height: 288px;
  overflow: auto;
  padding: 4px 10px 4px 4px;

  background: ${p => p.theme.colors.sectionBackgroundColor};
  box-shadow: ${p => p.theme.boxShadow};
  border-radius: 8px;
`;
