import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

export default function App(): JSX.Element {
  return (
    <div className="App bg-zinc-800">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
