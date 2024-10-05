import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  Avatar,
  Typography,
  Box,
} from '@mui/material';
import { Menu, Receipt, Payment } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const drawerWidth = 240;
  const userName = 'John Doe'; 

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Avatar
          sx={{ width: 72, height: 72, margin: '0 auto' }}
          src="/images/user-avatar.jpg" 
        />
        <Typography variant="h6">{userName}</Typography>
      </Box>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Menu />
          </ListItemIcon>
          <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button component={Link} to="/transactions">
          <ListItemIcon>
            <Receipt />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem button component={Link} to="/payments">
          <ListItemIcon>
            <Payment />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;