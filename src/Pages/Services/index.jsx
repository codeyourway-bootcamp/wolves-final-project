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
  return (
    <div className="page-services-container">
      {data.map((item) => {
        return (
          <div className="services-container">
            <p>{item.serviceName}</p>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <p style={{width: "40px"}}>{item.price}</p>
              <Button
                isRounded={true}
                size={"small"}
                color={"orange"}
                onClick={() => {
                  alert("Você selecionou " + item.serviceName);
                }}
              >
                select
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Services;