import { useState } from "react";
import Button from "../../Components/Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Services({ servicesList }) {
  const data = [
    {
      serviceName: "Hair",
      price: 15,
      id: 1,
    },
    {
      serviceName: "Beard",
      price: 7,
      id: 2,
    },
    {
      serviceName: "Coloring",
      price: 5,
      id: 3,
    },
    {
      serviceName: "Facial Treatment",
      price: 50,
      id: 4,
    },
    {
      serviceName: "Eyebrows",
      price: 2,
      id: 5,
    },
    {
      serviceName: "Razor shave",
      price: 3,
      id: 6,
    },
  ];
  const [total, setTotal] = useState([]);
  const navigate = useNavigate();

  const removeElement = (DeleteTotal) => {
    const newTotal = total.filter((total) => total !== DeleteTotal);
    setTotal(newTotal);
  };

  return (
    <>
      <h1 className="titulo">Menu:</h1>
      <div className="page-services-container">
        {data.map((item) => {
          return (
            <div className="services-container" key={item.serviceName}>
              <p className="texto">{item.serviceName}</p>
              <div
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ width: "40px" }}>{item.price}€</p>
                <Button
                  id="btn"
                  isRounded={true}
                  size={"small"}
                  color={"orange"}
                  onClick={() => {
                    const filteredTotal = total.filter((filteredItem) => {
                      return filteredItem.id === item.id;
                    });
                    if (filteredTotal.length === 0) {
                      setTotal([...total, item]);
                    } else {
                      alert("produto já incluido " + item.serviceName);
                    }
                  }}
                >
                  select
                </Button>
              </div>
            </div>
          );
        })}
        <div className="divisao"></div>
        <div>
          <h4>Itens no carrinho:</h4>
          {total.map(function (item) {
            return (
              <h5 className="conteiner">
                {item.serviceName} -{" "}
                <span className="total">{item.price}€</span>{" "}
                <button
                  onClick={() => removeElement(item)}
                  className="bi bi-trash-fill"
                  id="close"
                ></button>
              </h5>
            );
          })}
          <div className="divisao2"></div>

          <button
            id="checkout"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/checkout", { state: { selectedServices: total } });
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;