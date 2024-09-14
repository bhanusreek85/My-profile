import { Outlet  } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Nav />
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
