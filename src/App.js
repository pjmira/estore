import { Route, Routes } from 'react-router-dom';
import './App.css';
import CatNav from './Components/CatNav';
import MainComponent from './Components/MainComponent';
import TopNav from './Components/TopNav';
import LandingPage from './Components';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
// A new line added
function App() {
  return (
    <div className="App">
     <TopNav/>
     <CatNav/>
     <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/productDetails' Component={ProductDetails}/>
        <Route path='/cart' Component={Cart}/>
     </Routes>
     {/* <MainComponent/> */}
     
    </div>
  );
}

export default App;
