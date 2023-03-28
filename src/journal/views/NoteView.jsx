import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from '../../hooks'
import { ImageGalery } from '../components'
import { useEffect } from 'react'
import { setActiveNote, startDeletingNote, startLoadingNotes, startSaveNote, startUploadFiles } from '../../store/journal'
import { useRef } from 'react'


export const NoteView = () => {

  const dispatch = useDispatch();
  const { active:note, messageSaved, isSaving } = useSelector(state => state.journal );
  const { title, body, date, onInputChange, formState } = useForm( note )

  const dateString = useMemo(() => {
    const newDate = new Date( date )
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch( setActiveNote( formState ) )
  }, [formState])

  useEffect(() => {
    if ( messageSaved.length > 0 ) {
      Swal.fire('Update Note', messageSaved, 'success')
    }
  }, [messageSaved])
  
  const onSaveNote = () => {
    dispatch(startSaveNote());
  }
  
  const onFileInputChange = ({ target }) => {
    if ( target.files === 0 ) return;
    dispatch( startUploadFiles( target.files ) )
  }

  const onDeleteNote = () => {
    dispatch(startDeletingNote())
  }

  return (
    <Grid container
    direction='row'
    justifyContent='space-between'
    sx={{ mb:1 }}>
      <Grid item>
        <Typography fontSize={39} fontWeight='light' >{ dateString }</Typography>
      </Grid>
      <Grid item >
        <input 
          type="file"
          ref={ fileInputRef }
          multiple
          onChange={ onFileInputChange }
          style={{ display: 'none' }}
        />
        <Button
          color="error"
          disabled={ isSaving }
          onClick={ onDeleteNote }
        >
          <DeleteOutline sx={{ fontSize: 30, mr: 1 }} /> Delete
        </Button>
        <Button
          color="primary"
          disabled={ isSaving }
          onClick={ () => fileInputRef.current.click() }
        >
          <UploadOutlined sx={{ fontSize: 30, mr: 1 }} /> Files
        </Button>
        <Button
          disabled={ isSaving }
          onClick={ onSaveNote }>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> Save
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Insert Title'
          label='Title'
          sx={{ border: 'none', mb: 1 }}
          value={ title }
          name='title'
          onChange={ onInputChange }
        />
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='Insert Description'
          minRows={ 5 }
          value={ body }
          name='body'
          onChange={ onInputChange }
        />
      </Grid>
      {/* Image Galery */}
      <ImageGalery images={ note.imageURL } />
    </Grid>
  )
}