

// File: App.jsx
import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Upload from './components/Upload';

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Hero />
      <Upload />
      <Gallery />
    </div>
  );
}







