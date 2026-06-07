import EventList from "../components/EventList"
import EventFilter from "../components/EventFilter"


function Home ({ events, loading, error, onFilter, onDelete, onStatusUpdate }) {

    return (
        <div className="home-container">

            <h1 className="home-title">Upcoming events</h1>

            <EventFilter onFilter={onFilter}/>

            {loading && (
                <p className="message-loading">Loading events...</p>

            )}

            {error && (
                <p className="message-error">{error}</p>
            )}

            {loading && !error && events.length > 0 && (
                <EventList
                events={events}
                onDelete={onDelete}
                onStatusUpdate={onStatusUpdate}
                />
            )}
        </div>
    )
}


export default Home;