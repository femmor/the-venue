import Featured from './components/featured';
import Footer from './components/header_footer/Footer';
import Header from './components/header_footer/Header';

const App = () => {
  return (
    <>
      <Header />
      <Featured />
      <div
        style={{
          background: 'red',
          height: '800px',
        }}
      ></div>
      <div
        style={{
          background: 'blue',
          height: '800px',
        }}
      ></div>
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
