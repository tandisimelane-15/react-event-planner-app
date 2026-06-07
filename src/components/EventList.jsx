import EventCard from "./EventCard";

function EventList({ events, onStatusChange, onDelete }) {
  if (events.length === 0) {
    return (
      <section className="empty-state">
        <h2>No events found</h2>
        <p>Try another filter or add a new event.</p>
      </section>
    );
  }

  return (
    <section className="event-grid" aria-label="Events">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

export default EventList;