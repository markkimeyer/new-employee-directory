import React from "react";
import './styles.css';

function Searchbar(props) {
    return (
        <div className="form-group">
        <form className="form-inline my-2 my-lg-0">
            
            <input
                onChange={props.handleInputChange}
                value={props.filter}
                name="filter"
                type="text"
                className="form-control"
                placeholder="Name"
                id="filter"
            />
                </form>
            </div>
    
    )
};

export default Searchbar;