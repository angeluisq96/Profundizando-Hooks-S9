import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ title = '', body, id, date, imageURL = [] }) => {

  const newTitle = useMemo( () => {
    return title.length > 20
      ? title.substring(0,20) + '...'
      : title;
  }, [ title ] )

  const dispatch = useDispatch()
  const onClickItem = () => {
    dispatch( setActiveNote({ title, body, id, date, imageURL }) )
  }

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ onClickItem }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid 
          container
        >
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={ body } />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
