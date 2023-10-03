import { useLocation } from "react-router-dom";

export default function Footer() {
  const name = localStorage.getItem("valor-teste");
  console.log(name);

  const location = useLocation();

  const isFixed = ["/login", "/clientsCalendar"].includes(location.pathname);
  console.log(isFixed);
  return (
    <>
      <footer
        className="page-footer"
        style={{
          backgroundColor: "#1b0e02",

          position: isFixed ? "fixed" : "",
          bottom: "0",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Information</h5>
              <p className="grey-text text-lighten-4">
                Adress : Avenida David Mourão Ferreira 51
              </p>
              <p className="grey-text text-lighten-4">Cp : 1750-220</p>
              <p className="grey-text text-lighten-4">Cel : 913 479 465</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Socials</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Twiter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="footer-copyright"
          style={{ textAlign: "center", backgroundColor: "#1b0e02" }}
        >
          <div className="container">© 2023 Codeyourway Copyright</div>
        </div>
      </footer>
    </>
  );
}
