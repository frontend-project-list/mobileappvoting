import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import getUserFromToken from 'src/utils/localstorage';
import { LOGIN } from 'src/store/types/user';
import { login } from '../store/actions/user';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!getUserFromToken() && store.user.email) {
      navigate('/app/students', { replace: true });
    }

    if (getUserFromToken()) {
      const userInfo = JSON.parse(getUserFromToken()).data;
      dispatch({ type: LOGIN, payload: userInfo });
      navigate('/app/students', { replace: true });
    }
  }, [store]);
  const loginHandler = async (values) => {
    setIsSubmitting(true);
    try {
      await login(values)(dispatch);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      const msg = error.response?.data?.message || error;
      toast.error(msg);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(data) => {
              loginHandler(data);
              login(data)(dispatch);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                </Box>

                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                {/* <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link component={RouterLink} to="/register" variant="h6" underline="hover">
                    Sign up
                  </Link>
                </Typography> */}
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
