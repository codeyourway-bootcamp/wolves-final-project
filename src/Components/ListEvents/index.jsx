import React from "react";

// import { Container } from './styles';

function ListEvents(props) {
  //console.log(props.data)
  return (
    <div style={{ margin: "40px", padding: "20px" }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((item) => {
            return (
              <tr key={item.name}>
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
