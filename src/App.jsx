import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Main from './bodyMain';
import Footer from './footer';
import Blog from './blogs/blogMain';
import Contact from './contact';

import './App.css';
import 'animate.css/animate.min.css';

export default function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}