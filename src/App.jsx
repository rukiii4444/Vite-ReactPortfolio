import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Main from './bodyMain';
import Footer from './footer';
import Blog from './blogs/blogMain';
import Contact from './contact';

import './App.css';
import 'animate.css/animate.min.css';
import 'animate.css/animate.min.css';



function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App