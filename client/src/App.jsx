import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Events from './components/Events';
import Board from './components/Board';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import UserOwnProfile from './components/UserOwnProfile';
import UserDirectory from './components/UserDirectory';
import UserPage from './components/UserPage';

import ErrorPage from './components/ErrorPage';
import Loading from './components/Loading';
import { useLoading } from './contexts/LoadingContext';

import './styles/App.css';
import './styles/global.css'

const App = () => {
  const { loading } = useLoading();

  return (
    <Router>
      <div className="App">
        <Header />
        {loading && <Loading />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/board" element={<Board />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<UserOwnProfile />} />
          <Route path='/directory' element={<UserDirectory />} />

          <Route path="/users/:username" element={<UserPage />} />

          <Route path="*" element={<ErrorPage message="Page not found" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;