import Featured from './components/featured';
import Footer from './components/header_footer/Footer';
import Header from './components/header_footer/Header';
import Highlights from './components/highlights';
import VenueInfo from './components/venueInfo';

const App = () => {
  return (
    <>
      <>
        <Header />
      </>
      <>
        <Featured />
      </>
      <>
        <VenueInfo />
      </>
      <>
        <Highlights />
      </>
      <div
        style={{
          background: 'green',
          height: '800px',
        }}
      ></div>
      <div
        style={{
          background: 'yellow',
          height: '800px',
        }}
      ></div>
      <Footer />
    </>
  );
};

export default App;
