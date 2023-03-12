// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import sprite from '../../icons/sprite.svg';

import {
  Section,
  SectionList,
  SectionItem,
  IconBox,
  InfoBox,
  Value,
  Description,
} from './StatisticSection.styled';

const StatisticSection = ({ statisticsData }) => {
  const { compute_resources, games, iam_policies, iam_roles, iam_users } =
    statisticsData.statistic;
  return (
    <Section>
      <SectionList>
        <SectionItem>
          <IconBox>
            <svg width="24" height="24">
              <use href={`${sprite}#user`}></use>
            </svg>
          </IconBox>
          <InfoBox>
            <Value>{iam_users}</Value>
            <Description>IAM Users</Description>
          </InfoBox>
        </SectionItem>
        <SectionItem>
          <IconBox>
            <svg width="24" height="24">
              <use href={`${sprite}#setting`}></use>
            </svg>
          </IconBox>
          <InfoBox>
            <Value>{iam_roles}</Value>
            <Description>IAM Roles</Description>
          </InfoBox>
        </SectionItem>
        <SectionItem>
          <IconBox>
            <svg width="24" height="24">
              <use href={`${sprite}#keyhole`}></use>
            </svg>
          </IconBox>
          <InfoBox>
            <Value>{iam_policies}</Value>
            <Description>IAM Policies</Description>
          </InfoBox>
        </SectionItem>
        <SectionItem>
          <IconBox>
            <svg width="24" height="24">
              <use href={`${sprite}#share`}></use>
            </svg>
          </IconBox>
          <InfoBox>
            <Value>{compute_resources}</Value>
            <Description>Compute Resources</Description>
          </InfoBox>
        </SectionItem>
        <SectionItem>
          <IconBox>
            <svg width="24" height="24">
              <use href={`${sprite}#games`}></use>
            </svg>
          </IconBox>
          <InfoBox>
            <Value>{games}</Value>
            <Description>Games</Description>
          </InfoBox>
        </SectionItem>
      </SectionList>
    </Section>
  );
};

export default StatisticSection;
