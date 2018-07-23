import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.css";

const navigation = () => (
    <header className={classes.Header}>
        <nav>
            <ul className={classes.NavigationItems}>
                <li className={classes.NavigationItem}><NavLink exact activeClassName={classes.active} to="/">Home</NavLink></li>
                <li className={classes.NavigationItem}><NavLink activeClassName={classes.active} to="/add-person">Add Person</NavLink></li>
            </ul>
        </nav>
        <div className={classes.Logo}>
            <p>Persons</p>
        </div>
    </header>
);

export default navigation;