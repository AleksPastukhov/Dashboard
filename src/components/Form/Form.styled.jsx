import styled from 'styled-components';

import { Form, Field } from 'formik';

export const UserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-color: ${p => p.theme.colors.backgroundColors};
  color: ${p => p.theme.colors.colorText};
  width: 500px;
  margin: 160px auto 0;
`;

export const Input = styled(Field)`
  border: 1px solid #3d4250;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.backgroundColor};
  color: ${p => p.theme.colors.inputTextColor};
  font-size: 15px;
  line-height: calc(24 / 15);
  padding: 19px 15px;
  /* &:hover,
  &:active,
  &:focus {
    background-color: ${p => p.theme.colors.white};
    outline: transparent;
  } */
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: calc(56 / 48);
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: calc(24 / 15);
  color: ${p => p.theme.colors.secondaryTextColor};
`;
export const FormButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  color: ${p => p.theme.colors.primaryTextColor};
  background-color: ${p => p.theme.colors.accentСolor};
  border-radius: 8px;
  border: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: calc(24 / 15);
  /* transition: box-shadow 250ms ease, transform 250ms ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.boxShadow};
  } */
`;
export const LoginButton = styled.p`
  text-align: center;
  font-size: 15px;
  line-height: calc(24 / 15);

  & a {
    color: #78b4ed;
  }
`;
