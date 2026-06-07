
import React from 'react';
import EventCard from './EventCard';

export default function EventList({ events }) {
    return (
        <div className="event-list">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
}