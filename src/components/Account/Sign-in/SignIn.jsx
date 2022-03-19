import React, { useState } from 'react'
import Container from '@mui/material/Button';
import Button from '@mui/material/Button';
import { Avatar, Checkbox, CircularProgress, CssBaseline, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './Styles.css'
import { Visibility } from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formValue, setFormValue] = useState({
    email: '',
  })
  const [passwordValue, setPasswordValue] = useState({
    password: '',
    showPassword: false,
  })

  const handleChangeInputs = (name, event) => {
    setFormValue({ ...formValue, [name]: event.target.value })

  }
  const handleChangePassword = (prop) => (event) => {
    setPasswordValue({ ...passwordValue, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setPasswordValue({
      ...passwordValue,
      showPassword: !passwordValue.showPassword,
    })
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }


  const handleSubmit = () => {
    if (formValue !== '' && passwordValue !== '') {
      setLoading(true)
      setTimeout(() => {
        // dispatch(SIGN_IN_SUCCESS_ACTION(formValue))
        navigate('/')
        // Swal.fire(
        //   `Welcome Amir!`,
        //   'You have successfully signed in!',
        //   'success'
        // )
        setLoading(false)
      }, 2000)
    }
  }
  const [errors, setErrors] = useState('')
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm()

  return (
    <div className="signIn">
      <div className="wrapper">
        <Container className="signIn__container" component="main" maxWidth="xs">
          <CssBaseline>
            <div>
              <div className="signIn__logo">
                <Avatar >
                  <LockOpenIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </div>

              <div>
                <h2>Test commit</h2>
              </div>
              <form  >
                <InputLabel htmlFor="outlined-adornment-email">
                  Email Address *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  // {...register('email', { required: true })}
                  type="email"
                  fullWidth
                  labelWidth={110}
                  autoComplete="email"
                  autoFocus
                  style={{ marginBottom: '15px' }}
                  onChange={(event) => handleChangeInputs('email', event)}
                />
                <InputLabel htmlFor="outlined-adornment-password">
                  Password *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  // {...register('password', { required: true })}
                  type={passwordValue.showPassword ? 'text' : 'password'}
                  value={passwordValue.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {passwordValue.showPassword ? (
                          <Visibility />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  fullWidth
                  labelWidth={70}
                  autoComplete="password"
                  onChange={handleChangePassword('password')}
                />
                {errors.password ? (
                  <p >Password is required.</p>
                ) : (
                  ''
                )}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {loading === false ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="signIn__btn"
                    onClick={() => handleSubmit()}
                  >
                    Sign In
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled
                    // className={classes.submitLoading}
                    onClick={() => handleSubmit()}
                  >
                    <CircularProgress
                      size={30}
                    // className={classes.circularProgress}
                    />
                    Loading...
                  </Button>
                )}
                <Grid container>
                  <Grid item xs>
                    <Link to="/404" variant="body2" >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" variant="body2" >
                      Do not have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </form>

            </div>
          </CssBaseline>
        </Container>
      </div>
    </div >
  )
}

export default SignIn