import{ useState } from "react"
import EventForm from "../components/EventForm"

function AddEvent({ onEventAdded }) {
    {/*states*/}

    const [loading, setLoading] =useState(false)
    const [success, setSuccess] =useState("")
    const [error, setError] =useState("")

    function handleSubmit(formData) {
        setLoading(true)
        setSuccess("")
        setError("")

        fetch("http://localhost:3001/events", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newEvent => {
            setLoading(false)
            setSuccess("Event added successfully!")
            onEventAdded(newEvent)
        })
        .catch(() => {
            setLoading(false)
            setError("Failed to add event. Please try again")
        })
    }

    return (
        <div>
            <h1>Add New Event</h1>

            {loading && <p>Saving event...</p>}
            {success && <p style={{ color: "green"}}>{success}</p>}
            {error && <p style={{color: "red"}}>{error}</p>}

            <EventForm onSubmit={handleSubmit}/>
        </div>
    )
}


export default Addevent;