import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './EventCard.css'; 

const EventCard = ({ event }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="event-card" onClick={toggleDescription}>
      <div className="card-content">
        <img src={event.image} alt={event.name} />
        <h3>{event.name}</h3>
        <p>{event.date}</p>
        <p>{event.location}</p>
      </div>
      {showDescription && (
        <motion.div 
          className="description-box"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h4>Event Description</h4>
          <p>{event.description}</p>
          <button onClick={toggleDescription}>Close</button>
        </motion.div>
      )}
    </div>
  );
};

export default EventCard;
