import styled from 'styled-components';

export const Section = styled.section`
  padding: 24px 32px 20px 32px;
  width: 100%;
`;

export const Caption = styled.caption`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  color: red;

  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  line-height: calc(24 / 18);
  color: ${p => p.theme.colors.primaryTextColor};
`;

export const Icon = styled.svg`
  stroke: ${p => p.theme.colors.primaryTextColor};
`;

export const TableButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 13px;
  line-height: calc(20 / 13);
  color: ${p => p.theme.colors.primaryTextColor};
  cursor: pointer;
  background: transparent;
  border: none;
  border-spacing: 0;
  margin: 0;
  padding: 0;
  text-align: center;
  text-decoration: none;
  text-indent: 0;
`;
