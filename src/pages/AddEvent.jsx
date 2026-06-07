import EventForm from "../components/EventForm";

function AddEvent({ onSubmit }) {
  return (
    <section className="page-section page-section--narrow">
      <div className="page-heading">
        <p className="eyebrow">Create</p>
        <h1>Add New Event</h1>
        <p>Plan a school, work, community, or personal event.</p>
      </div>

      <EventForm onSubmit={onSubmit} />
    </section>
  );
}

export default AddEvent;