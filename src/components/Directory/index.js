import React from "react";
import './style.css';


function Directory(props) {
  return (
    
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Directory;




// function Directory() {
//   return (
//     <div className="container">


//       <div className="jumbotron">
//         <h1>Employee Directory</h1>
//         <p>
//           Filter by column heading or use the search box to narrow results.
//         </p>
//       </div>
//       <div>
//         <form className="form-inline my-2 my-lg-0">
//           <input
//             className="form-control mr-sm-2"
//             type="search"
//             placeholder="Name"
//             aria-label="Search"
//           />
//           <button className="btn btn-outline-warning  my-2 my-sm-0" type="submit">
//             Search
//             </button>
//         </form>
//       </div>
// </div>
//   );
// }

// export default Directory;
