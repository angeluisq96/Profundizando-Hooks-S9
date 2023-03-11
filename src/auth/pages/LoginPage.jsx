import { useEffect, useMemo } from "react"
import { Link as RouterLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

import { useForm } from "../../hooks/useForm"
import { startGoogleSingIn, startUserAndPasswordSingIn } from "../../store/auth/"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth)
  
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  })

  const onSubmitForm = (event) => {
    event.preventDefault();
    dispatch(startUserAndPasswordSingIn({ email, password }))
  }

  const onLoginGoogle = (event) => {
    event.preventDefault();
    dispatch(startGoogleSingIn())
  }

  return (
    <AuthLayout title="Login">
      <form 
        onSubmit={onSubmitForm}
        className="animate__animated animate__fadiIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@lkp.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={ !!errorMessage ? '' : 'none' }>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant='contained'
                fullWidth
                type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant='contained'
                fullWidth
                onClick={onLoginGoogle} >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear Cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
