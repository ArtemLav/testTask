import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Info } from './components/Info/Info';
import { Introduction } from './components/Introduction/Introduction';
import { CheerfulUsers } from './components/CheerfulUsers/CheerfulUsers';
import { Register } from './components/Register/Register';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Info />
      <Introduction />
      <CheerfulUsers />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
