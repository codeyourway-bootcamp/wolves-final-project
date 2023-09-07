import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { user_registration } from "../../../fakedatabase";

export default function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


//   useEffect(
//     function(){
//         user_registration.then(
//             function(data){
//                 console.log(data)
//             }
//         )
//     },[email, password]
//   )
  const handleSubmit = async (e) => {
    e.preventDefault();

    // fetch("url").then((response) => {
    //   Response.json().then((data) => {});
    //   if (data.length > 0){
    //     navigate ('/dashboard');
    //     }else{
    //         navigate ("/login")
    //   }
      
    // });
    user_registration.then(
    function(response){
        const usuarioCorrespondente = response.data.find(
            function(item){
                console.log(item)
                const formatDataUser = {
                    user_email:email,
                    user_password:password
                }
                const formatDataResponse = {
                    user_email:item.user_email,
                    user_password:item.user_password
                }
                return JSON.stringify(formatDataResponse) === JSON.stringify(formatDataUser)
            }
        )
      
    }
)
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
