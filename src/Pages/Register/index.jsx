import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [Form, setForm] = useState();

  const validateForm = () => {
    if (!Form) return false;

    const requiredFields = [
      "name",
      "lastname",
      "companyname",
      "servicecategory",
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
    } else {
      window.M.toast({
        html: "Please fill in all the fields.",
        classes: "red darken-3",
        displayLength: 4000,
      });
    }
  };

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              onChange={(e) => setForm({ ...Form, name: e.target.value })}
              id="first_name"
              type="text"
              className="validate"
            />
            <label for="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              onChange={(e) => setForm({ ...Form, lastname: e.target.value })}
              id="last_name"
              type="text"
              className="validate"
            />
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={(e) =>
                setForm({ ...Form, companyname: e.target.value })
              }
              id="company_name"
              type="text"
              className="validate"
            />
            <label for="">Company Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={(e) =>
                setForm({ ...Form, servicecategory: e.target.value })
              }
              id="company_name"
              type="text"
              className="validate"
            />
            <label for="">Service Category</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={(e) => setForm({ ...Form, password: e.target.value })}
              id="password"
              type="password"
              className="validate"
            />
            <label for="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={(e) => setForm({ ...Form, email: e.target.value })}
              id="email"
              type="email"
              className="validate"
            />
            <label for="email">Email</label>
          </div>
        </div>
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
