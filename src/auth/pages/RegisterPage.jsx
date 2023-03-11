
import { Alert, Button, Grid, Link, TextField } from '@mui/material'
import { useMemo } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { startRegisterWithEmailAndPassword } from '../../store/auth/thunks'
import { AuthLayout } from '../layout/AuthLayout'

const formData = {
  displayName: ' ',
  email: '@',
  password: '        '
}

const formValidations = {
  displayName: [ (value) => value.length >= 1 , 'No puede estar vacio' ],
  email: [ (value) => value.includes('@') , 'Debe contener un @' ],
  password: [ (value) => value.length >= 6 , 'Debe tener minimo 8 caracteres' ],
}

export const RegisterPage = () => {
  const [ formSubmitted, setformSubmitted ] = useState(false)
  const { 
    displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, formState
  } = useForm(formData, formValidations)
  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] )
  const onSubmitForm = (event) => {
    event.preventDefault();
    setformSubmitted(true)
    if( !isFormValid ) return;
    dispatch(startRegisterWithEmailAndPassword(formState))
  }
  const dispatch = useDispatch();

  return (
    <AuthLayout title='Register'>
      <form
        onSubmit={ onSubmitForm }
        className="animate__animated animate__fadiIn animate__faster"
      >
        <Grid container>
          <h1>Form valido { isFormValid ? 'si' : 'no' }</h1>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label='Name'
              type='text'
              placeholder='Name'
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid }
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid item xs={12} sx={{mt: 1 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='correo@lkp.com'
              name='email'
              value={ email }
              onChange={ onInputChange }
              fullWidth
              error={ !!emailValid }
              helperText={ emailValid }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='Password'
              name='password'
              value={ password }
              onChange={ onInputChange }
              fullWidth
              error={ !!passwordValid }
              helperText={ passwordValid }
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
              <Alert severity='error'>
                { errorMessage }
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={ isCheckingAuthentication }
                type='submit'
                variant='contained'
                fullWidth >
                Create Acount
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
