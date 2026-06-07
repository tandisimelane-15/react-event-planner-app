import { useState } from "react"

function EventFilter({ onFilter }){

    const [category, setCategory] = useState("All")
    const [status, setStatus] = useState("All")

    function handleCategoryChange(e){
        const selected = e.target.value
        setCategory(selected)
        onFilter(selected, status)
    }

    function handleStatusChange(e){
        const selected = e.target.value
        setStatus(selected)
        onFilter(category, selected)
    }

    return (
        <div className="filter-container">

            <div className="filter-group">
                <label>Filter by Category</label>
                <select value={category} onChange={handleCategoryChange}>
                    <option value="All">All Categories</option>
                    <option value="School">School</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Peronal</option>
                    <option value="Community">Community</option>
                    <option value="Birthday">Birthday</option>
                </select>
            </div>
            <div className="filter-group">
                <label>Filter by Status</label>
                <select value={status} onChange={handleStatusChange}>
                    <option value="All">All</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>
        </div>
    )
}

export default EventFilter;