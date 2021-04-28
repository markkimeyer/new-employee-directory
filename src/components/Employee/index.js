import React from "react";
import "./style.css";

function Employee(props) {
  const allUsers = props.employee

  return (
    <table>
      <thead>
        <tr>
          <th>
            Image
          </th>
          <th>
            Name
          </th>
          <th>
            Phone
          </th>
          <th>
            Email
          </th>
          <th>
            DOB
          </th>
        </tr>
      </thead>
      <tbody>
      {allUsers.map(employee=>{
        return(
        <tr key={employee.uuid}>
          <td>
            <img src={employee.thumbnail} />
          </td>
          <td>
            {`${employee.firstName} ${employee.lastName}`}
          </td>
          <td>
            {employee.phone}
          </td>
          <td>
            {employee.email}
          </td>
          <td>
            {employee.dob}
          </td>
        </tr>
        )
      })}
      </tbody>
    </table>
  );
}

export default Employee;