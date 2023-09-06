import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fakeDataBase = "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("url").then((response) => {
      Response.json().then((data) => {});
      if (lengh > 0){
        navigate ('/dashboard')
      }
      
    });
  };

  return (
    <div className="container">
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
