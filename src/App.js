import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from './components/Error404';
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvendidos a Pasteleria y Decoración'/>} />
          <Route path='/category/:id' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element={<Error404/>} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;

