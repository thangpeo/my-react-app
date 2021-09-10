import Header from './components/Header'
import Footer from './components/Footer'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { ProvideCart } from './components/useCart';

function App() {
  return (
    <div style={{marginTop: 50 + 'px'}}>
      <ProvideCart>
        <BrowserRouter>
          <Header/>
          <Routes/>
          <Footer/>
        </BrowserRouter>
      </ProvideCart>
    </div>
      
  );
}

export default App;
