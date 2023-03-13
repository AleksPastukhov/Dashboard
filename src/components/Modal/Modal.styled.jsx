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
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(36, 38, 53, 0.08),
    0px 4px 12px rgba(36, 38, 53, 0.1), 0px 16px 24px rgba(55, 58, 83, 0.16);
  border-radius: 8px;
`;
