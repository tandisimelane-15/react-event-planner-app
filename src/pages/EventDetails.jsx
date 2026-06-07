import { Link, useParams } from "react-router-dom";

const STATUSES = ["Upcoming", "Ongoing", "Completed", "Cancelled"];

function EventDetails({ events, onStatusChange, onDelete }) {
  const { id } = useParams();
  const event = events.find((currentEvent) => String(currentEvent.id) === id);

  if (!event) {
    return (
      <section className="page-section page-section--narrow">
        <div className="empty-state">
          <h1>Event not found</h1>
          <p>The event may still be loading or it may have been deleted.</p>
          <Link className="button" to="/">
            Back home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section page-section--narrow">
      <Link className="back-link" to="/">
        Back to events
      </Link>

      <article className="details-panel">
        <p className="eyebrow">{event.category}</p>
        <h1>{event.title}</h1>
        <p className="details-description">{event.description}</p>

        <dl className="details-list">
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
          <div>
            <dt>Status</dt>
            <dd>{event.status}</dd>
          </div>
        </dl>

        <div className="details-actions">
          <label>
            Update status
            <select
              value={event.status}
              onChange={(e) => onStatusChange(event.id, e.target.value)}
            >
              {STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <button
            className="button button--danger"
            type="button"
            onClick={() => onDelete(event.id)}
          >
            Delete event
          </button>
        </div>
      </article>
    </section>
  );
}

export default EventDetails;
