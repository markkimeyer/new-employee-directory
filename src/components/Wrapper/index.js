import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">
     <div className="jumbotron">
        <h1>Employee Directory</h1>
         <p>
          Filter by column heading or use the search box to narrow results.
         </p>      
          </div>
          <form className="form-inline my-2 my-lg-0">
           <input
          className="form-control mr-sm-2"
             type="search"
             placeholder="Search Employee"
            aria-label="Search"
           />
           </form>
    {props.children}</div>;
}

export default Wrapper;