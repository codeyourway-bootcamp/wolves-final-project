import { useState } from "react";
import Button from "../../Components/Button";
import "./styles.css";

function Services({ servicesList }) {
  const data = [
    {
      serviceName: "Hair",
      price: 15,
    },
    {
      serviceName: "Beard",
      price: 7,
    },
    {
      serviceName: "Coloring",
      price: 5,
    },
    {
      serviceName: "Facial Treatment",
      price: 50,
    },
  ];
  const [total, setTotal] = useState([]);

  return (
    <div className="page-services-container">
      {data.map((item) => {
        return (
          <div className="services-container" key={item.serviceName}>
            <p>{item.serviceName}</p>
            <div
              style={{
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
                  setTotal([...total, item]);
                }}
              >
                select
              </Button>
            </div>
          </div>
        );
      })}
      <div>
        <h4>Itens no carrinho:</h4>
        {total.map(function (item) {
          return (
            <h5 className="conteiner">
              {item.serviceName} - <span className="total">{item.price}€</span>{" "}
              <button className="close">X</button>
            </h5>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
