import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [Form, setForm] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    if (!Form) return false;

    const requiredFields = [
      "name",
      "lastname",
      "companyname",
      "adress",
      "password",
      "email",
    ];
    for (let field of requiredFields) {
      if (!Form[field]) return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("save", JSON.stringify(Form));
      window.M.toast({ html: "Registration completed successfully." });
      navigate("/login");
    } else {
      window.M.toast({
        html: "Please fill in all the fields.",
        classes: "red darken-3",
        displayLength: 4000,
      });
    }
  };

  return (
    <>
      <div
        style={{
          color: "gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "35px",
          fontSize: "30px",
        }}
      >
        Fill in your details to complete the registration
      </div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                style={{ color: "white" }}
                onChange={(e) => setForm({ ...Form, name: e.target.value })}
                id="first_name"
                type="text"
                className="validate"
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                style={{ color: "white" }}
                onChange={(e) => setForm({ ...Form, lastname: e.target.value })}
                id="last_name"
                type="text"
                className="validate"
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                style={{ color: "white" }}
                onChange={(e) =>
                  setForm({ ...Form, companyname: e.target.value })
                }
                id="company_name"
                type="text"
                className="validate"
              />
              <label htmlFor="">Company Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                style={{ color: "white" }}
                onChange={(e) => setForm({ ...Form, adress: e.target.value })}
                id="adress"
                type="text"
                className="validate"
              />
              <label htmlFor="">Adress</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                style={{ color: "white" }}
                onChange={(e) => setForm({ ...Form, password: e.target.value })}
                id="password"
                type="password"
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                style={{ color: "white" }}
                onChange={(e) => setForm({ ...Form, email: e.target.value })}
                id="email"
                type="email"
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
