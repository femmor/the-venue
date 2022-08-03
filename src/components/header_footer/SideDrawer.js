import { Drawer, List, ListItem } from '@material-ui/core';

const SideDrawer = ({ open, onClose }) => {
  // Links to parts of the page
  const links = [
    {
      where: 'featured',
      value: 'Back to top',
    },
    {
      where: 'venueInfo',
      value: 'Venue Info',
    },
    {
      where: 'highlights',
      value: 'Highlights',
    },
    {
      where: 'pricing',
      value: 'Pricing',
    },
    {
      where: 'location',
      value: 'Location',
    },
  ];

  // Render the links
  const renderItem = ({ where, value }) => (
    <ListItem button key={value} onClick={() => onClose(where)}>
      {value}
    </ListItem>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      classes={{ paper: 'side_drawer' }}
      style={{
        display: 'flex',
      }}
    >
      <List component="nav">{links.map(renderItem)}</List>
    </Drawer>
  );
};
export default SideDrawer;
