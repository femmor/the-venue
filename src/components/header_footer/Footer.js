import { Slide } from 'react-awesome-reveal';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bck_black">
      <Slide direction="up" triggerOnce>
        <div className="font_righteous footer_logo_venue">The Venue</div>
        <div className="footer_copyright">
          The venue {year} - All Rights Reserved.
        </div>
      </Slide>
    </footer>
  );
};
export default Footer;
