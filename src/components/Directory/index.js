import React, { Component } from "react";
import './style.css';
import API from "../../utils/API";
import Searchbar from "../Searchbar";
import Employee from "../Employee";

class Directory extends Component {
  state = {
    results: [],
    filter: ""
  };

  
  componentDidMount() {
    
    API.getEmployees()
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
          thumbnail : employee.picture.medium
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
        <Employee employee={this.state.results}/>
      </div>
    );
  }
}


export default Directory;

