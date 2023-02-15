import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({ drawerWitdth = 240 }) => {
  return (
    <AppBar
    position='fixed' 
    sx={{ 
      width: { sm: `calc(100% - ${ drawerWitdth }px)` }, 
      ml:{ sm: `${ drawerWitdth }px` } 
    }}>
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid container direction='row' justifyContent='space-between' alignItems='center' >
          <Typography variat='h6' noWrap component='div' >Journal App</Typography>
          <IconButton color='white'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
