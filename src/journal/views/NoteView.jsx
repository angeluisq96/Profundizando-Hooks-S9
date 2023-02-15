import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"


export const NoteView = () => {
  return (
    <Grid container
    direction='row'
    justifyContent='space-between'
    sx={{ mb:1 }}>
      <Grid item>
        <Typography fontSize={39} fontWeight='light' >13 Feb, 2024</Typography>
      </Grid>
      <Grid item >
        <Button>
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
        />
      </Grid>
      {/* Image Galery */}
      <ImageGalery />
    </Grid>
  )
}