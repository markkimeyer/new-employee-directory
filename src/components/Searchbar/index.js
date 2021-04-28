import React from "react";
import './styles.css';

function Searchbar(props) {
    return (

        <form className="form-inline my-2 my-lg-0">
            <input
                onChange={props.handleInputChange}
                value={props.filter}
                name="filter"
                type="text"
                className="form-control"
                placeholder="Name"
                id="search"
            />
        </form>
    )
};

export default Searchbar;