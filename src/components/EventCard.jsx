import { Link } from "react-router-dom";

const STATUSES = ["Upcoming", "Ongoing", "Completed", "Cancelled"];

function EventCard({ event, onStatusChange, onDelete }) {
  function handleStatusChange(e) {
    onStatusChange(event.id, e.target.value);
  }

  return (
    <article className="event-card">
      <div className="event-card__header">
        <div>
          <p className="event-card__category">{event.category}</p>
          <h2>{event.title}</h2>
        </div>
        <span className={`status-pill status-pill--${event.status.toLowerCase()}`}>
          {event.status}
        </span>
      </div>

      <p className="event-card__description">{event.description}</p>

      <dl className="event-meta">
        <div>
          <dt>Date</dt>
          <dd>{event.date}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>{event.time}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{event.location}</dd>
        </div>
      </dl>

      <div className="event-card__actions">
        <label>
          Status
          <select value={event.status} onChange={handleStatusChange}>
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <Link className="button button--secondary" to={`/events/${event.id}`}>
          View details
        </Link>
        <button
          className="button button--danger"
          type="button"
          onClick={() => onDelete(event.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default EventCard;