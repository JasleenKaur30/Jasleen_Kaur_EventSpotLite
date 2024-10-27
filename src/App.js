import React, { useState } from 'react';
import './App.css';
import logo from './assests/logo.png'; 


import EventList from './components/EventList';
import EventModal from './components/EventModal';

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Query:', query);
    setEmail('');
    setQuery('');
  };

  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>EventSpot <span className="highlight">Lite</span></h1>
      </header>
      <EventList onEventClick={handleEventClick} />
      <EventModal event={selectedEvent} onClose={closeModal} />
      <footer className="footer">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: Eventspolite@example.com</p>
          <p>Phone: 6284403141</p>
        </div>
        <div className="footer-section">
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <textarea 
              placeholder="Your query..." 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
              required 
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default App;
