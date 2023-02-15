import { CssBaseline, ThemeProvider } from "@mui/material"
import { themePurple } from "./"

export const Apptheme = ({ children }) => {
  return (
    <ThemeProvider theme={ themePurple }>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    { children }
  </ThemeProvider>
  )
}
