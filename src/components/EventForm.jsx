import { useState } from "react";

{/*create EventForm component*/}
function EventForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        time: "",
        location: "",
        category: "School",
        status: "Upcoming",
        description: ""
    })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(formData)
        setFormData({
            title: "",
            date: "",
            time: "",
            location: "",
            category: "School",
            status: "Upcoming",
            description: ""
        })
    }
    {/*What user sees returned on the screen*/}
    return (
        <form onSubmit={handleSubmit}>
        {/*Title field*/}
            <label>Event Title</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                />

        {/*Date field*/}
            <label>Date</label>
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                />

        {/*Time field*/}
            <label>Time</label>
            <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                />

        {/*Location field*/}
            <label>Location</label>
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                />

        {/*Category field*/}
            <label>Category</label>
            <select
                name="Category"
                value={formData.category}
                onChange={handleChange}  
            >
                <option value="School">School</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Community">Community</option>
                <option value="Birthday">Birthday</option>
            </select>

        {/*Status label*/}
            <label>Status</label>
            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
            >
                <option value="Upcoming">Upcoming</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
            </select>
        
        {/*Description field*/}
            <label>Description</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
            />

            <button type="submit">Add Event</button>

        </form>
    )
}

export default EventForm;