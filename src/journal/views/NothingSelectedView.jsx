import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
    container
    spacing={ 0 }
    direction="column"
    alignContent="center"
    justifyContent="center"
    sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main' }} >
      <Grid item xs={ 12 }>
        <Typography color='white' variant='h5'>Select any target, Please</Typography>
      </Grid>
    </Grid>

  )
}
