import React, { Component } from "react";
import './style.css';
import API from "../../utils/API";
import Searchbar from "../Searchbar";
import Employee from "../Employee";

class Directory extends Component {
  state = {
    filter: "",
    results: []
  };

  // When this component mounts, pull random user list
  componentDidMount() {
    this.getEmployees(10);
  }

  getEmployees = (numEmployees) => {
    API.search(numEmployees)
    .then(res => this.setState({ results: res.data.results.map((employee)=>{
      return(
        {
          uuid:employee.login.uuid,
          firstName: employee.name.first,
          lastName: employee.name.last,
          phone: employee.phone,
          email: employee.email,
          dob: employee.dob.date,
          age: employee.dob.age, 
          thumbnail : employee.picture.thumbnail
        }
      )
    })}))
    .catch(err => console.log(err));
};

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1>Employee Directory</h1>
          <br></br>
          <p>Filter by heading or use the search box to narrow your results.</p>
        </div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="navbar-collapse row" id="navbarNav">
            <div className="searchbox">
              <Searchbar
                filter={this.state.filter}
                handleInputChange={this.handleInputChange}
              />
            </div>
          </div>
        </nav>
        <Employee employee={this.state.results.filter(user=>{return `${user.firstName} ${user.lastName}`.toLowerCase().includes(this.state.filter.toLowerCase())})} />
      </div>
    );
  }
}

// function Directory(props) {
//   return (
//     <Container>
//       <Searchbar>
//       </Searchbar>
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Email:</strong> {props.email}
//           </li>
//           <li>
//             <strong>Location:</strong> {props.location}
//           </li>
//         </ul>
//       </div>
//     </div>
//     </Container>
//   );
// }

export default Directory;

