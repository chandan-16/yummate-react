import { Routes, Route } from "react-router-dom";

import Body from './components/Body';
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} errorElement={<Error />} />
        <Route path="/about" element={<About />} errorElement={<Error />} />
        <Route path="/contact" element={<Contact />} errorElement={<Error />} />
        <Route path="/cart" element={<Cart />} errorElement={<Error />} />
        <Route path="/error" element={<Error/>} errorElement={<Error />} />
      </Routes>
    </div>
  );
}


export default App;
