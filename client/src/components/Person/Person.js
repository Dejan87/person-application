import React from "react";

const person = (props) => (
    <tr>
      <td>{props.name}</td>
      <td>{props.surname}</td>
      <td>{props.createdDate}</td>
      <td>{props.city}</td>
      <td>{props.address}</td>
      <td>{props.phone}</td>
    </tr>
);

export default person;