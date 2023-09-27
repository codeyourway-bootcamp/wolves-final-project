import React from "react";
import ListEvents from "../../Components/ListEvents";
// import { Container } from './styles';

function ClientsCalendar() {
  const eventsListExemple = [
    {
      name: "Leticia",
      date: "13/09/2023",
      hour: "19:00",
    },
    {
      name: "Jaklim",
      date: "20/09/2023",
      hour: "15:00",
    },
    {
      name: "Fred",
      date: "22/09/2023",
      hour: "16:30",
    },
  ];
  return (
    <div>
      <div style={{ textAlign: "center", padding: "30px", fontSize: "24px" }}>
        Clients Calendar
      </div>
      <ListEvents data={eventsListExemple} />
    </div>
  );
}

export default ClientsCalendar;
