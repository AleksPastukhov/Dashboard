import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
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

export const Icon = styled.svg`
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 8px;
  &.user {
    background-color: ${p => p.theme.colors.userIconBackgraundColor};
  }
  &.setting {
    background-color: ${p => p.theme.colors.settingIconBackgraundColor};
  }
  &.keyhole {
    background-color: ${p => p.theme.colors.keyholeIconBackgraundColor};
  }
  &.share {
    background-color: ${p => p.theme.colors.shareIconBackgraundColor};
  }
  &.games {
    background-color: ${p => p.theme.colors.gamesIconBackgraundColor};
  }
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
