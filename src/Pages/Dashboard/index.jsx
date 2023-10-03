import { useState, useEffect } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [adressName, setAdressName] = useState("");

  useEffect(() => {
    const savedForm = JSON.parse(localStorage.getItem("save"));
    if (savedForm) {
      setFirstName(savedForm.name);
      setLastName(savedForm.lastname);
      setCompanyName(savedForm.companyname);
      setAdressName(savedForm.adress);
    }
  }, []);

  const [employeeCount, setEmployeeCount] = useState(1);

  const handleFormSubmission = (e) => {
    e.preventDefault();

    navigate("/clientsCalendar");
  };

  return (
    <>
      <h1
        style={{
          color: "gray",
          padding: "0 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Dashboard
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      >
        <h4 style={{ color: "gray", padding: "0 20px" }}>
          Welcome:{" "}
          <span style={{ color: "#26a69a", marginLeft: "10px" }}>
            {firstName} {lastName}
          </span>
        </h4>
        <h4 style={{ color: "gray", padding: "0 20px" }}>
          Company:
          <span style={{ color: "#26a69a", marginLeft: "10px" }}>
            {" "}
            {companyName}
          </span>
        </h4>
        <h4 style={{ color: "gray", padding: "0 20px" }}>
          Adress:
          <span style={{ color: "#26a69a", marginLeft: "10px" }}>
            {" "}
            {adressName}
          </span>
        </h4>
      </div>
      <div></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          padding: "10px",
          border: "1x solid #ccc ",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          margin: "5px auto",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
          marginBottom: "70px",
        }}
      >
        <label htmlFor="Service Category">Service Category</label>
        <input type="text" />

        {Array.from({ length: employeeCount }).map((_, index) => (
          <div key={index}>
            <label htmlFor={`Employee Name ${index + 1}`}>
              Employee Name {index + 1}
            </label>
            <input type="text" />
            <button
              className="btn-floating btn-small waves-effect waves-light red"
              onClick={() => setEmployeeCount((prev) => prev + 1)}
            >
              Add Employee
            </button>
          </div>
        ))}

        <div
          style={{
            color: "gray",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ marginRight: "90px" }}>Day</p>
          <p>Hour</p>
        </div>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              <span>Monday ------- 09:00 - 18:00</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Tuesday ------- 09:00 - 18:00</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Wednesday ------- 09:00 - 18:00</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Thursday ------- 09:00 - 18:00</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Friday ------- 09:00 - 18:00</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Saturday ------- 09:00 - 18:00</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Sunday ------- 09:00 - 18:00</span>
            </label>
          </li>
        </ul>
        <button className="btn" onClick={handleFormSubmission} type="submit">
          Submit
        </button>
      </div>
    </>
  );
}
