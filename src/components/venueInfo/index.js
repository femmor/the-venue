import { Zoom } from 'react-awesome-reveal';
import iconCalendar from '../../resources/images/icons/calendar.png';
import iconLocation from '../../resources/images/icons/location.png';

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom triggerOnce className="vn_item">
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${iconCalendar})` }}
                  ></div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">11 March 2023 @12.00 am</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom triggerOnce className="vn_item" delay={500}>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div>
                    <div
                      className="vn_icon"
                      style={{ background: `url(${iconLocation})` }}
                    ></div>
                  </div>
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">14500 Deer Creek, Redmond 98052</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};
export default VenueInfo;
