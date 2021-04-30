import React from "react";
import './styles.css';

function Searchbar(props) {
    return (

        <form className="form-inline my-2 my-lg-0">
            <input
                value={props.filter}
                onChange={props.handleInputChange}
                name="filter"
                type="text"
                className="form-control"
                placeholder="Name"
                id="filter"
            />
        </form>
    )
};

export default Searchbar;