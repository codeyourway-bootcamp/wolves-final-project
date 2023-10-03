import React, { useState, useEffect } from "react";
import ListEvents from "../../Components/ListEvents";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

function ClientsCalendar() {
  const { isAuthenticated } = useAuth();
  const [agendamentos, setAgendamentos] = useState([]);
  const [agendamentosFiltrados, setAgendamentosFiltrados] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedEmployee) {
      const filtrado = agendamentos.filter(
        (item) => item.empregado === selectedEmployee
      );
      setAgendamentosFiltrados(filtrado);
    } else {
      setAgendamentosFiltrados(agendamentos);
    }
  }, [selectedEmployee, agendamentos]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const existingAgendamentos =
      JSON.parse(localStorage.getItem("agendamentos")) || [];
    setAgendamentos(existingAgendamentos);
    setAgendamentosFiltrados(existingAgendamentos);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        flexDirection: "column",
      }}
    >
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
        <label
          style={{
            fontSize: "15px",
            margin: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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

// QUALQUER COISA
