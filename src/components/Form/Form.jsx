import { Formik, ErrorMessage } from 'formik';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  UserForm,
  FormButton,
  LoginButton,
  Input,
  FormWrapper,
  TitleBox,
  Title,
  Subtitle,
} from './Form.styled';

const Form = () => {
  const location = useLocation();
  const locationPath = location.pathname;
  console.log(locationPath);

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/home');
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <UserForm>
        <TitleBox>
          <Title>
            {locationPath !== '/login' ? (
              <NavLink to="login">Welcome</NavLink>
            ) : (
              <NavLink to="/">Welcome back</NavLink>
            )}
          </Title>
          <Subtitle>Welcome! Please enter your details</Subtitle>
        </TitleBox>
        <FormWrapper>
          {locationPath !== '/login' ? (
            <>
              <Input type="text" name="name" placeholder="Name" required />
              <ErrorMessage name="name" />
            </>
          ) : (
            <></>
          )}
          <Input type="email" name="email" placeholder="Email" required />
          <ErrorMessage name="number" />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <ErrorMessage name="number" />
        </FormWrapper>

        <FormButton type="submit">
          {locationPath !== '/login' ? 'Create account' : 'Log in'}
        </FormButton>

        <LoginButton>
          Or
          {locationPath !== '/login' ? (
            <NavLink to="login"> Log in</NavLink>
          ) : (
            <NavLink to="/"> Sing Up</NavLink>
          )}
        </LoginButton>
      </UserForm>
    </Formik>
  );
};
export default Form;
