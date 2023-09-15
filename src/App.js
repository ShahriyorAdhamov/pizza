import './App.css';
import Cart from './components/cart';
import Main from './pages/main';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import NotFound from './pages/not-found';
import Card from './components/card';

function App() {
  return (
    <div className="App container">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        {/* <Route path='/:id' element={<Card/>}/> */}
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
