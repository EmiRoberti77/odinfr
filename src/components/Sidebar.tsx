import { Box } from '@mui/system';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'white', boxShadow: "5px", width: "12rem" }}>
      <Box sx={{ display: 'flex', marginLeft: '2px', justifyContent: "center" }}>
        <img src="./assets/odin-logo.png" alt="Admin Logo" style={{ marginTop: "10px", height: '4rem', marginRight: '8px', width: "85%", padding: "8px" }} />
      </Box>
      <Divider sx={{ height: 0, border: '0.3px solid rgb(230, 227, 227)' }} />
      <Box sx={{}}>
        <List component="ul">
          <ListItem sx={{ color: 'violet', alignItems: "center" }} button component={Link} to="/home">
            <ListItemIcon>
              <DashboardIcon sx={{ fontSize: '18px', color: '#7451f8' }} />
            </ListItemIcon>
            <ListItemText primary="Aware" sx={{ fontSize: '13px', fontWeight: 600, color: '#888' }} />
          </ListItem>
          <ListItem sx={{ color: 'violet', alignItems: "center" }} button component={Link} to="/settings" >
            <ListItemIcon>
              <BarChartRoundedIcon sx={{ fontSize: '18px', color: '#7451f8' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ fontSize: '13px', fontWeight: 600, color: '#888' }} />
          </ListItem>
          <ListItem sx={{ color: 'violet', alignItems: "center" }} button component={Link} to="/profile">
            <ListItemIcon>
              <PersonRoundedIcon sx={{ fontSize: '18px', color: '#7451f8' }} />
            </ListItemIcon>
            <ListItemText primary="Admin" sx={{ fontSize: '13px', fontWeight: 600, color: '#888' }} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
