import React from "react";

import * as classes from "./Person.css";

const person = (props) => (
    <tr>
      <td>{props.name}</td>
      <td>{props.surname}</td>
      <td>{props.createdDate}</td>
      <td>{props.city}</td>
      <td>{props.address}</td>
      <td>{props.phone}</td>
      <td><span onClick={props.delete} className={classes.Delete}>Delete</span></td>
    </tr>
);

export default person;