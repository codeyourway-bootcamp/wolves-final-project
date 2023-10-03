import React, { useState, useEffect } from "react";
import ListEvents from "../../Components/ListEvents";
<<<<<<< HEAD
// import { Container } from './styles';
import { useEffect } from "react";
=======
>>>>>>> f441e46ecfdc1498751070c48c2af3a4d0c41d94
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

function ClientsCalendar() {
  const { isAuthenticated } = useAuth();
<<<<<<< HEAD
  const navigate = useNavigate();
=======
  const [agendamentos, setAgendamentos] = useState([]);
  const [agendamentosFiltrados, setAgendamentosFiltrados] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedEmployee) {
      const filtrado = agendamentos.filter((item) => item.empregado === selectedEmployee);
      setAgendamentosFiltrados(filtrado);
    } else {
      setAgendamentosFiltrados(agendamentos);
    }
  }, [selectedEmployee, agendamentos]);

>>>>>>> f441e46ecfdc1498751070c48c2af3a4d0c41d94
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
<<<<<<< HEAD
  });
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
=======
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const existingAgendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    setAgendamentos(existingAgendamentos);
    setAgendamentosFiltrados(existingAgendamentos);
  }, []);
>>>>>>> f441e46ecfdc1498751070c48c2af3a4d0c41d94
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
      flexDirection: "column",
    }}>
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          fontSize: "24px",
          color: "gray",
        }}
      >
        Clients Calendar
      </div>
      <div>
        <label style={{ fontSize: "15px", margin: "10px" }}>
          Select Employee
        </label>
        <select
          style={{ maxWidth: "230px", margin: "10px" }}
          className="browser-default"
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
           <option value="" disabled selected>
          Click and Choose your Barber
        </option>
          <option value="João">João</option>
          <option value="Pedro">Pedro</option>
        </select>
      </div>
      <ListEvents data={agendamentosFiltrados} />
    </div>
  );
}

export default ClientsCalendar;