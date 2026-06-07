
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EventCard({ event }) {
    const navigate = useNavigate();

    return (
        <div className="event-card" onClick={() => navigate(`/events/${event.id}`)}>
            <img src={event.image} alt={event.title} />
            <div className="event-card-body">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <span className="category">{event.category}</span>
                <span className="status">{event.status}</span>
                <p className="date">{event.date}</p>
            </div>
        </div>
    );
}