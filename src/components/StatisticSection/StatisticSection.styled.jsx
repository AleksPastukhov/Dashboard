import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1757px;
`;

export const SectionList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const SectionItem = styled.li`
  display: flex;

  gap: 22px;
  width: 100%;
  padding: 20px;
  background-color: ${p => p.theme.colors.sectionBackgroundColor};
  border-radius: 8px;
  box-shadow: ${p => p.theme.boxShadow};
`;

export const IconBox = styled.div`
  padding: 12px;
  height: 100%;
  background-color: ${p => p.theme.colors.iconBackgraundColor};
  border-radius: 8px;
`;

export const InfoBox = styled.div``;

export const Value = styled.h2`
  font-weight: 400;
  font-size: 44px;
  line-height: 48px;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;
