import { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: '#2f2f2f',
        boxShadow: 'none',
        padding: '10px 0px',
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The Venue</div>
          <div className="header_logo_title">musical event</div>
        </div>

        <IconButton aria-label="Menu" color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <SideDrawer open={drawerOpen} onClose={toggleDrawer} />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
