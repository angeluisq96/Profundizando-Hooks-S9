// import { Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
// import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView, /* NoteView */ } from "../views"

export const JournalPage = () => {
  const { isSaving, active } = useSelector(state => state.journal)
  // const isSavingNewNote = useMemo(() => isSaving === true, [isSaving])
  
  // const isCreatingNewNote = useMemo(() => status === 'checking', [status])

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }
  return (
    <JournalLayout>
      {
        (!!active)
        ? <NoteView />
        : <NothingSelectedView />
      }

      <IconButton
      disabled={ isSaving }
      onClick={ onClickNewNote }
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
      
    </JournalLayout>
  )
}
