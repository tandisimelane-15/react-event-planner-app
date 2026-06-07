import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddEvent from "./pages/AddEvent";
import EventDetails from "./pages/EventDetails";
import Home from "./pages/Home";
import "./App.css";

const API_URL = "http://localhost:3001/data";

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load events");
        }
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        setError("");
      })
      .catch(() => {
        setError("Unable to load events. Make sure json-server is running.");
      })
      .finally(() => setLoading(false));
  }, []);

  function handleAddEvent(eventData) {
    return fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add event");
        }
        return res.json();
      })
      .then((newEvent) => {
        setEvents((currentEvents) => [newEvent, ...currentEvents]);
        navigate("/");
      });
  }

  function handleStatusChange(eventId, status) {
    return fetch(`${API_URL}/${eventId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update event");
        }
        return res.json();
      })
      .then((updatedEvent) => {
        setEvents((currentEvents) =>
          currentEvents.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event,
          ),
        );
      });
  }

  function handleDeleteEvent(eventId) {
    return fetch(`${API_URL}/${eventId}`, {
      method: "DELETE",
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Failed to delete event");
      }

      setEvents((currentEvents) =>
        currentEvents.filter((event) => event.id !== eventId),
      );
      navigate("/");
    });
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                events={events}
                loading={loading}
                error={error}
                onStatusChange={handleStatusChange}
                onDelete={handleDeleteEvent}
              />
            }
          />
          <Route path="/add-event" element={<AddEvent onSubmit={handleAddEvent} />} />
          <Route
            path="/events/:id"
            element={
              <EventDetails
                events={events}
                onStatusChange={handleStatusChange}
                onDelete={handleDeleteEvent}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
