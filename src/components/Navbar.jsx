import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import NotificationsIcon from "@mui/icons-material/Notifications"

export default function Navbar({ onMenuClick, mode, onToggleMode }) {
   return (
    <AppBar position="static" elevation={24}>
        <Toolbar sx={{gap: 1}}>
            <IconButton color="inherit" edge="start" onClick={onMenuClick}>
                <MenuIcon />
            </IconButton>
            
            <Box sx={{ flexGrow: 1, minWidth: 0}}>
                <Typography
                  variant="h6"
                  component="div"
                  noWrap
                  sx={{ fontSize: {xs: "1rem", sm: "1.25rem" } }}
                >
                    Admin Dashboard
                </Typography>
            </Box>

            <Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
                <IconButton color="inherit" onClick={onToggleMode}>
                    {mode === "dark"? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
            </Tooltip>

            <IconButton color="inherit">
                <NotificationsIcon />
            </IconButton>

        </Toolbar>
    </AppBar>
   )
}