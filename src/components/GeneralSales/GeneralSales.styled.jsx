import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.sectionBackgroundColor};
  border-radius: 4px;
  padding: 20px 32px 20px 32px;
  width: 100%;
`;

export const Caption = styled.caption`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  color: red;
  margin-bottom: 32px;

  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  line-height: calc(24 / 18);
  color: ${p => p.theme.colors.primaryTextColor};
`;

export const Table = styled.table`
  border: 0;
  table-layout: fixed;
  align-items: center;
  width: 100%;
  font-size: 13px;
  line-height: calc(20 / 13);
  color: ${p => p.theme.colors.primaryTextColor};
`;

export const TableHead = styled.thead`
  font-weight: 500;
  font-size: 11px;

  line-height: calc(12 / 11);
  text-align: left;
  color: ${p => p.theme.colors.tableHeadTextColor};
`;

export const HeadColumn = styled.tr``;
export const Body = styled.tbody``;

export const TableHeadRows = styled.th`
  padding: 0 0 8px 0;
  &.model {
    width: 280px;
  }
  &.name {
    width: 280px;
  }
  &.type {
    width: 140px;
  }
  &.limited {
    width: 140px;
  }
  &.operations {
    width: 140px;
  }
  &.date {
    width: 220px;
  }
  &.rating {
    width: 140px;
  }
  &.status {
    width: 140px;
  }
  &.price {
    width: 140px;
  }
  &.options {
    width: 72px;
  }
`;

export const TableRows = styled.td`
  padding: 15px 0;
`;

export const Name = styled.span`
  width: 113px;
`;

export const CardModel = styled.span`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const CardNumber = styled.span`
  display: block;
  font-size: 11px;
  line-height: 12px;
  line-height: calc(12 / 11);
  color: ${p => p.theme.colors.tableHeadTextColor};
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
