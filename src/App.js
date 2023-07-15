import './App.css';
import CardsList from './components/cards-list';
import Card from './components/card';
import Cart from './components/cart';
import Main from './components/main';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';

function App() {
  return (
    <div className="App container">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        {/* <Route path='/:id' element={<Card/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
