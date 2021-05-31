import React from "react";
import "./style.css";
import useSort from "../../Sort/useSort.js";

  
import Moment from 'moment';

function FormatDate(dt) {
      // Format date as MM/DD/YYYY
      return Moment(dt).format('L');
    
  };


function Employee(props) {
  const {items: allUsers, requestSort} = useSort(props.employee)

const handleClick = (column) => {
  requestSort(column);
  }



return (
  <table>
    <thead>
      <tr>
        <th>
          Image
        </th>
        <th onClick={() =>handleClick("firstName")}>
          Name <i class="fas fa-arrows-alt-v"></i>
        </th>
        <th onClick={() =>handleClick("phone")}>
          Phone <i class="fas fa-arrows-alt-v"></i>
        </th>
        <th>
          Email
        </th>
        <th onClick={() =>handleClick("age")}>
          DOB <i class="fas fa-arrows-alt-v"></i>
        </th>
      </tr>
    </thead>
    <tbody>
      {allUsers.map(employee=>{
        return(
        <tr key={employee.uuid}>
          <td>
            <img src={employee.thumbnail} alt="headshot" />
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
            {FormatDate(employee.dob)}
          </td>
        </tr>
        )
      })}
      </tbody>
    </table>
  );
}

export default Employee;