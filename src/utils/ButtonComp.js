import { Button } from '@material-ui/core';
import TicketIcon from '../resources/images/icons/ticket.png';

const ButtonComp = ({ text, type, variant, link, size, style, icon }) => {
  return (
    <Button
      variant={variant}
      color={type}
      size={size ? size : 'large'}
      link={link}
      style={{
        backgroundColor: '#8E8E8E',
        color: '#fff',
        ...style,
      }}
    >
      {icon ? (
        <img src={TicketIcon} className="iconImage" alt="icon_button" />
      ) : null}
      {text}
    </Button>
  );
};
export default ButtonComp;
