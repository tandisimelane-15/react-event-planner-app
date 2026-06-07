import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import EventList from "../components/EventList";

const STATUSES = ["All", "Upcoming", "Ongoing", "Completed", "Cancelled"];

function Home({ events, loading, error, onStatusChange, onDelete }) {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = events.map((event) => event.category);
    return ["All", ...new Set(uniqueCategories)];
  }, [events]);

  const filteredEvents = events.filter((event) => {
    const categoryMatches =
      categoryFilter === "All" || event.category === categoryFilter;
    const statusMatches = statusFilter === "All" || event.status === statusFilter;
    return categoryMatches && statusMatches;
  });

  return (
    <section className="page-section">
      <div className="home-hero">
        <div>
          <p className="eyebrow">Event planner</p>
          <h1>Track every event from idea to completion.</h1>
          <p>
            View, add, update, filter, inspect, and remove events from one
            simple dashboard.
          </p>
        </div>
      </div>

      <section className="filters" aria-label="Event filters">
        <label>
          Category
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label>
          Status
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
      </section>

      {loading && <p className="state-message">Loading events...</p>}
      {error && <p className="state-message state-message--error">{error}</p>}
      {!loading && !error && (
        <EventList
          events={filteredEvents}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      )}
    </section>
  );
}

export default Home;