import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../styles/Calendar.css";

const eventsData = [
  {
    title: "Football Match",
    start: "2024-09-12T10:00:00",
    end: "2024-09-12T12:00:00",
    description: "Quarterfinal Football match between teams A and B",
  },
  {
    title: "Basketball Tournament",
    start: "2024-09-15T09:00:00",
    description: "Basketball tournament at the central court",
  },
  {
    title: "Swimming Gala",
    start: "2024-09-20T08:30:00",
    description: "Swimming competition in the main pool",
  },
  {
    title: "Track and Field",
    start: "2024-09-25T15:00:00",
    description: "Track and Field events in the stadium",
  },
  {
    title: "Track and Field",
    start: "2024-08-25T15:00:00",
    description: "Track and Field events in the stadium",
  },
  {
    title: "Swimming Gala",
    start: "2024-08-25T15:00:00",
    description: "Swimming competition in the main pool",
  },
  {
    title: "Swimming Gala",
    start: "2024-08-25T15:00:00",
    description: "Swimming competition in the main pool",
  },
];

const EventCalendar = () => {
  return (
    <div className="calendar-container" id="calendar">
      <div className="calendar  calendar-div">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height={"90vh"} // You can adjust this dynamically
          dayMaxEventRows={2} // Limit max event rows per day for better responsiveness
          aspectRatio={1.35} // Makes the calendar's shape more compact
          events={eventsData}
          fixedWeekCount={false}
          eventClick={(info) => {
            alert(
              `Event: ${info.event.title}\nDescription: ${info.event.extendedProps.description}`
            );
          }}
          className="full-calendar"
        />
      </div>
    </div>
  );
};

export default EventCalendar;
