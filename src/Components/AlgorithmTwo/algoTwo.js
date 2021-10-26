import React from 'react';
import './algoTwo.css';


import {DropdownButton, Dropdown} from "react-bootstrap";

function algotwo() {
    return (

        <div className="container">

            <div className="dropDown">
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item > Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>

            <div className="outer-wrapper">

                <div className="wrapper">

                    <div className="slide one"></div>

                </div>

            </div>
        </div>

    )
}

export default algotwo();