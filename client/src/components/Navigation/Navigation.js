import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const navigation = () => (
    <header className={header}>
        <nav>
            <ul className={header__navigationItems}>
                <li className={header__navigationItem}><NavLink exact activeClassName={active} to="/">Home</NavLink></li>
                <li className={header__navigationItem}><NavLink activeClassName={active} to="/add-person">Add Person</NavLink></li>
            </ul>
        </nav>
        <div className={header__logo}>
            <p>Persons</p>
        </div>
    </header>
);

export default navigation;