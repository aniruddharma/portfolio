import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import { Toaster } from './components/ui/toaster';
import { PortfolioDataProvider } from './context/PortfolioDataContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <PortfolioDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </PortfolioDataProvider>
    </div>
  );
}

export default App;