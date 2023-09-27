import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./style.css";

export default function Checkout() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [Form, setForm] = useState({});

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
      window.M.toast({ html: "Sent Information!" });
      localStorage.setItem("save", JSON.stringify(Form));
      navigate("/");
    } else {
      window.M.toast({ html: "Please fill out all required fields!" });
    }
  };
  return (
    <>
      <div className="Header">
        <h4>Company Name:</h4>
        <h4>Adress:</h4>
      </div>

      <label>Select Employee</label>
      <select className="browser-default">
        <option value="" disabled selected>
          Click and Choose your Barber
        </option>
        <option value="1">João</option>
        <option value="2">Pedro</option>
      </select>
      <div className="Calendar">
        <label>Select day and hour</label>
      </div>
      <div>
        <Datetime
          onChange={(date) => setSelectedDate(date)}
          input={false}
          open={true}
          dateFormat="YYYY-MM-DD"
          timeFormat="HH"
          isValidDate={isValidDate}
          closeOnSelect={true}
        />
        {selectedDate && (
          <p>
            Selected Date and Time: {selectedDate.format("YYYY-MM-DD HH:00")}
          </p>
        )}
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          //   maxWidth: "300px",
          //   padding: "20px",
          //   border: "1x solid #ccc ",
          //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          //   margin: "20px auto",
          //   borderRadius: "5px",
          //   backgroundColor: "#f9f9f9",
        }}
      >
        My basket
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1000px",
          padding: "100px",
          border: "1x solid #ccc ",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          margin: "20px auto",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
        }}
      >
        Conteudo do carrinho, essa informaçao vai vim da pagina services quando
        o cliente selecionar o serviço. exemplo: "Hair----------"15"
      </div>
      <div>
        <button
          className="waves-effect waves-red btn-large red darken-3"
          onClick={() => setShowForm(true)}
        >
          Checkout
        </button>
      </div>

      {showForm && (
        <div style={{ display: "block" }}>
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => setForm({ ...Form, name: e.target.value })}
            id="name"
            type="text"
            className="validate"
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setForm({ ...Form, email: e.target.value })}
            id="email"
            type="text"
            className="validate"
          ></input>
          <button
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
