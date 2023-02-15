// import { Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, /* NoteView */ } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim ipsa animi consequatur numquam officiis repellendus itaque omnis maxime corrupti, nostrum et qui ducimus vero optio dolore eum illum? Nihil.</Typography> */}
      <NothingSelectedView />

      <IconButton
      size='large'
      sx={{
        color:'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
        position: 'fixed',
        right: 50,
        bottom: 50
      }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      {/* <NoteView /> */}
    </JournalLayout>
  )
}
