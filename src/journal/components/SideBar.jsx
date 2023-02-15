import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const SideBar = ({ drawerWitdth = 240 }) => {
  return (
    <Box 
      component='nav'
      sx={{ width: { sm: drawerWitdth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open 
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWitdth }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Gohan
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {
            ['Ene', 'Feb', 'Mar', 'Abr'].map( text => (
              <ListItem key={ text } disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container >
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ 'Lorem ipsom descriotion coñio' }/>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>


      </Drawer>

    </Box>
  )
}
