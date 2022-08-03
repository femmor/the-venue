import { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';
import { Slide } from 'react-awesome-reveal';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
        boxShadow: 'none',
        padding: '10px 0px',
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <Slide direction="left" triggerOnce>
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">musical event</div>
          </Slide>
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
