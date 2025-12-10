import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import Clients from './components/Clients';
import Solutions from './components/Solutions';
import Products from './components/Products';
import SocialMedia from './components/SocialMedia';
import SupportGrid from './components/SupportGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Header />
      <main>
        <Hero />
        <UseCases />
        <Clients />
        <Solutions />
        <Products />
        <SocialMedia />
        <SupportGrid />
      </main>
      <Footer />
    </div>
  );
};

export default App;