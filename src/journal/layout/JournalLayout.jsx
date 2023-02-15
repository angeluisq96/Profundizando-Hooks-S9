import { Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../components'

let drawerWitdth = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

      <NavBar drawerWitdth={ drawerWitdth } />
      <SideBar drawerWitdth={ drawerWitdth } />

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        { children }
      </Box>

    </Box>
  )
}
