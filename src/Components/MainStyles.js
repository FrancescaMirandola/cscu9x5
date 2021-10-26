import React from 'react';
import './mainStyles.css';
import backgroundImg from '../static/images/bkg2.png';
import {DropdownButton, Dropdown} from "react-bootstrap";

function MainStyles() {
    return (

        <div className="container">

            <div className="dropDown">
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item > Action</Dropdown.Item>
                    <Dropdown.Item href="algorithmTwo">Algo two</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>

            <div className="outer-wrapper">

                <div className="wrapper">

                    <div className="slide one"
                         style={{
                             backgroundImage: `url(${backgroundImg})`
                         }}>

                    </div>

                </div>

            </div>
            </div>

            )
            }

            export default MainStyles;