import { useState } from "react";

const initialFormData = {
  title: "",
  date: "",
  time: "",
  location: "",
  category: "School",
  status: "Upcoming",
  description: "",
};

const CATEGORIES = [
  "School",
  "Career",
  "Work",
  "Networking",
  "Workshop",
  "Community",
  "Personal",
  "Birthday",
];

const STATUSES = ["Upcoming", "Ongoing", "Completed", "Cancelled"];

function EventForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialFormData);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    onSubmit(formData)
      .then(() => setFormData(initialFormData))
      .catch(() => setError("Failed to save event. Please try again."))
      .finally(() => setSaving(false));
  }

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      {error && <p className="form-message form-message--error">{error}</p>}

      <label>
        Event title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>

      <div className="form-row">
        <label>
          Date
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <label>
        Location
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </label>

      <div className="form-row">
        <label>
          Category
          <select name="category" value={formData.category} onChange={handleChange}>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label>
          Status
          <select name="status" value={formData.status} onChange={handleChange}>
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Description
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>

      <button className="button" type="submit" disabled={saving}>
        {saving ? "Saving..." : "Add event"}
      </button>
    </form>
  );
}

export default EventForm;