import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Upload from './components/Upload';
import './App.css';


export default function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Hero />
      <Upload />
      <Gallery />
    </div>
  );
}


