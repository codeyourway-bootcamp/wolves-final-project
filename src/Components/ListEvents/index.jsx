import React from "react";

// import { Container } from './styles';

function ListEvents(props) {
  console.log(props.data);
  return (
    <div
      style={{
        margin: "40px",
        padding: "20px",
        color: "black",
        backgroundColor: "white",
        width: "80%",
      }}
    >
      <table>
        <thead>
          <tr style={{ borderWidth: "3px" }}>
            <th>Client</th>
            <th>Date</th>
            <th>Hour</th>
            <th>Email</th>
            <th>Employee</th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr style={{ borderWidth: "3px" }} key={index}>
                <td>{item.nome}</td>
                <td>{item.data}</td>
                <td>{item.hora}</td>
                <td>{item.email}</td>
                <td>{item.empregado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListEvents;
