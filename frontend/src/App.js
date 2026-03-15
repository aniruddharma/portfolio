import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { PortfolioDataProvider } from './context/PortfolioDataContext';
import Portfolio from './pages/Portfolio';
import { Toaster } from './components/ui/toaster';
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
        <Analytics />
        <SpeedInsights />
      </PortfolioDataProvider>
    </div>
  );
}

export default App;