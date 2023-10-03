import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./style.css";
import { useLocation } from "react-router-dom";

export default function Checkout() {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [Form, setForm] = useState({});
  const location = useLocation();
  const [selectedServices, setSelectedServices] = useState(
    location.state ? location.state.selectedServices : []
  );
  const calculateTotal = () => {
    return selectedServices.reduce((acc, item) => acc + item.price, 0);
  };

  const validateForm = () => {
    if (!Form) return false;

    const requiredFields = ["name", "email"];
    for (let field of requiredFields) {
      if (!Form[field] || !Form[field].trim()) return false;
    }

    return true;
  };
  const isValidDate = (currentDate) => {
    const day = currentDate.day();

    return day !== 0 && day !== 6;
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const agendamentoAtual = {
        data: selectedDate.format("YYYY-MM-DD"),
        hora: selectedDate.format("HH:00"),
        nome: Form.name,
        email: Form.email,
        empregado: selectedEmployee,
      };
      const existingAgendamentos =
        JSON.parse(localStorage.getItem("agendamentos")) || [];

      localStorage.setItem(
        "agendamentos",
        JSON.stringify([...existingAgendamentos, agendamentoAtual])
      );

      window.M.toast({
        html: "Sent Information! Make the payment on site to the professional. Thanks!",
      });
      localStorage.setItem("save", JSON.stringify(Form));
      navigate("/");
    } else {
      window.M.toast({ html: "Please fill out all required fields!" });
    }
  };
  return (
    <>
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

      {/* Para fazer o fetch especifico de cada profissional .  
      const joaoAgendamentos = JSON.parse(localStorage.getItem("João"));  
      const PedroAgendamentos = JSON.parse(localStorage.getItem("Pedro")); */}

      <div className="Calendar">
        <label
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          Select day and hour
        </label>
      </div>
      <div className="App">
        <Datetime
          className="custom-datetime"
          onChange={(date) => setSelectedDate(date)}
          input={false}
          open={true}
          dateFormat="YYYY-MM-DD"
          timeFormat="HH"
          isValidDate={isValidDate}
          closeOnSelect={true}
        />
        {selectedDate && (
          <p
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Selected Date and Time: {selectedDate.format("YYYY-MM-DD HH:00")}
          </p>
        )}
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "30px",
        }}
      >
        My basket
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1000px",
          padding: "10px",
          border: "1x solid #ccc ",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          margin: "20px auto",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {selectedServices.length === 0 ? (
            <li>None Services Selected</li>
          ) : (
            selectedServices.map((service) => (
              <li key={service.id} style={{ marginBottom: "10px" }}>
                {service.serviceName} - {service.price}€
              </li>
            ))
          )}
          <li style={{ marginTop: "20px", fontWeight: "bold" }}>
            Total: {calculateTotal()}€
          </li>
        </ul>
      </div>
      <div>
        <button
          style={{
            margin: " 10px 900px",
          }}
          className="waves-effect waves-red btn-large red darken-3"
          onClick={() => setShowForm(true)}
        >
          Checkout
        </button>
      </div>
      {showForm && (
        <div style={{ display: "block" }}>
          <label style={{ margin: "10px" }} htmlFor="name">
            Name:
          </label>
          <input
            style={{
              color: "white",
              margin: "10px",
              width: "830px",
              height: "25px",
            }}
            onChange={(e) => setForm({ ...Form, name: e.target.value })}
            id="name"
            type="text"
            className="validate"
          ></input>
          <label style={{ margin: "10px" }} htmlFor="email">
            Email:
          </label>
          <input
            style={{
              color: "white",
              margin: "10px",
              width: "830px",
              height: "25px",
            }}
            onChange={(e) => setForm({ ...Form, email: e.target.value })}
            id="email"
            type="text"
            className="validate"
          ></input>
          <button
            style={{ margin: "10px" }}
            className="waves-effect waves-red btn-large red darken-3"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      )}
    </>
  );
}
// const agendamento = JSON.parse(localStorage.getItem("nomeDoProfissional"));

// localStorage.setItem(
//   "nomeDoProfissional",
//   JSON.stringify([...agendamento, { agendamentoAtual }])
// );
// const agendamento = JSON.parse(localStorage.getItem("nomeDoProfissional"))

// localStorage.setItem("nomeDoProfissional", JSON.stringify([...agendamento, {agendamentoAtual}]))

// localStorage é como se fosse uma variável. portanto, ficará da seguinte forma.

// const yago = [{data: '', hora: "", nome: "", email: ""}]

// Para fazer especifico de cada profissional o fetch.
// const joaoAgendamentos = JSON.parse(localStorage.getItem("João"));
// const PedroAgendamentos = JSON.parse(localStorage.getItem("Pedro"));
