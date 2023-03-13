
import sprite from '../../icons/sprite.svg';

import {
  Section,
  SectionList,
  SectionItem,
  Icon,
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
          <Icon className="user">
            <use href={`${sprite}#user`}></use>
          </Icon>
          <InfoBox>
            <Value>{iam_users}</Value>
            <Description>IAM Users</Description>
          </InfoBox>
        </SectionItem>
        <SectionItem>
          <Icon className="setting">
            <use href={`${sprite}#setting`}></use>
          </Icon>

          <InfoBox>
            <Value>{iam_roles}</Value>
            <Description>IAM Roles</Description>
          </InfoBox>
        </SectionItem>
        <SectionItem>
          <Icon className="keyhole">
            <use href={`${sprite}#keyhole`}></use>
          </Icon>
          <InfoBox>
            <Value>{iam_policies}</Value>
            <Description>IAM Policies</Description>
          </InfoBox>
        </SectionItem>
        <SectionItem>
          <Icon className="share">
            <use href={`${sprite}#share`}></use>
          </Icon>
          <InfoBox>
            <Value>{compute_resources}</Value>
            <Description>Compute Resources</Description>
          </InfoBox>
        </SectionItem>
        <SectionItem>
          <Icon className="games">
            <use href={`${sprite}#games`}></use>
          </Icon>
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
