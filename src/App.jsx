import { ThemeProvider } from "@emotion/react"
import { Box, Container, CssBaseline, Typography } from "@mui/material"
import Navbar from "./components/Navbar"
import { useMemo, useState } from "react"
import getTheme from "./theme"
import Sidebar from "./components/Sidebar"

function App() {

  const [mode, setMode] = useState("light")
  const theme = useMemo(() => getTheme(mode), [mode])

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"))
  }

  const handleMenuClick = () => {
    alert("Menu clicked (later we can make this open a drawer)")
  }

  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />

      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Navbar 
          onMenuClick={handleMenuClick}
          mode={mode}
          onToggleMode={toggleMode}
        />

        <Box sx={{ flex: 1, py:3}}>
           <Sidebar />
           <Container maxWidth="lg">
             <Typography variant="h5" sx={{ mb: 2 }}>
                Overview
             </Typography>
           </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
