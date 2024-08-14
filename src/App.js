import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features'
import Info from './components/Info'
import About from './components/About'

export default function App() {
  return(
    <>
      <Navbar />
      <Header />
      <Features />
      <Info />
      <About />
    </>
  );
}
