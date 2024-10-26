import React from 'react';
import { motion } from 'framer-motion';
import './EventCard.css'; 

const EventCard = ({ event }) => {
  return (
    <motion.div 
      className="event-card"
      whileHover={{ rotateY: 180 }} 
      transition={{ duration: 0.6 }}
      style={{ perspective: 1000 }}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={event.image} alt={event.name} />
          <h3>{event.name}</h3>
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>
        <div className="card-back">
          <h3>{event.name}</h3>
          <p>{event.description}</p> {}
          <p>Location: {event.location}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
