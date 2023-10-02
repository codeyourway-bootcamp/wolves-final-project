import React from "react";

// import { Container } from './styles';

function ListEvents(props) {
  //console.log(props.data)
  return (
    <div style={{ margin: "40px", padding: "20px", color: "black", backgroundColor: "white" }}>
      <table>
        <thead>
          <tr style={{ borderWidth: "3px"}}>
            <th>Name</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((item) => {
            return (
              <tr style={{ borderWidth: "3px"}} key={item.name}>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.hour}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListEvents;
