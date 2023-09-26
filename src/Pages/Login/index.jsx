
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { user_registration } from "../../../fakedatabase";
import { useAuth } from "../../AuthContext"



export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  user_registration.then(function (response) {
    const usuarioCorrespondente = response.data.find(function (item) {
      const formatDataUser = {
        user_email: email,
        user_password: password,
      };
      const formatDataResponse = {
        user_email: item.user_email,
        user_password: item.user_password,
      };
      return (
        JSON.stringify(formatDataResponse) === JSON.stringify(formatDataUser)
      );
    });
    if (usuarioCorrespondente) {
      login();
      navigate('/dashboard');
    } else {
      window.M.toast({html: 'Incorrect email or password.', classes: 'red darken-3', displayLength: 4000});
    }
  });
};

  return (
    <div className="container">
      <h1
        style={{
          color: "gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Welcome
      </h1>
      <p
        style={{
          color: "gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Dear customer, provide your login to access the dashboard.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
        </div>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
    
  );
}
