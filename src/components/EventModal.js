// src/components/EventModal.js
import React from 'react';
import { motion } from 'framer-motion';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <img src={event.image} alt={event.name} />
        <button onClick={onClose}>Close</button>
      </motion.div>
    </div>
  );
};

export default EventModal;
