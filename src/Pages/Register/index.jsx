import { useNavigate } from "react-router-dom";

export default function Register() {
  return (
    <div className="row">
        <h4 style={{
            color: "gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>Fill in your details to start using our services</h4>
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="company_name" type="text" className="validate"/>
          <label for="">Company Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="company_name" type="text" className="validate"/>
          <label for="">Service Category</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <button className="btn" type="submit" >
          Submit
        </button>
      
    </form>
  </div>
  
);
}
