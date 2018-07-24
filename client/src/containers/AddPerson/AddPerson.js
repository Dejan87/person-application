import React, { Component } from "react";

import classes from "./AddPerson.css";
import axios from "axios";

class AddPerson extends Component {
    state = {
        name: "",
        surname: "",
        city: "",
        address: "",
        phone: ""
    }

    nameChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    surnameChangeHandler = (event) => {
        this.setState({
            surname: event.target.value
        });
    }

    phoneChangeHandler = (event) => {
        this.setState({
            phone: event.target.value
        });
    }

    cityChangeHandler = (event) => {
        this.setState({
            city: event.target.value
        });
    }

    addressChangeHandler = (event) => {
        this.setState({
            address: event.target.value
        });
    }

    formatDate = date => {
        let monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
      
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    addPersonHandler = (event) => {
        // Prevent reloading the page
        event.preventDefault();

        let createdDate = this.formatDate(new Date());

        // Prepare data for post request
        const person = {
            name: this.state.name,
            surname: this.state.surname,
            createdDate: createdDate,
            city: this.state.city,
            address: this.state.address,
            phone: this.state.phone
        }

        axios.post("/api/person", person)
            .then(response => {
                this.props.history.replace("/"); // Redirect user
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        return (
            <div className={classes.Form}>
                <form onSubmit={this.addPersonHandler}>
                    <label>Name:</label>
                    <input 
                        onChange={this.nameChangeHandler} 
                        type="text" 
                        id="fname" 
                        name="firstname" 
                        placeholder="Your Name..." 
                        value={this.state.name}
                        required />

                    <label>Surname:</label>
                    <input 
                        onChange={this.surnameChangeHandler} 
                        type="text" 
                        id="lname" 
                        name="lastname" 
                        placeholder="Your Surname..." 
                        value={this.state.surname}
                        required />

                    <label>City:</label>
                    <input 
                        onChange={this.cityChangeHandler} 
                        type="text" 
                        id="city" 
                        name="city" 
                        placeholder="Your City..." 
                        value={this.state.city}
                        required />

                    <label>Address:</label>
                    <input 
                        onChange={this.addressChangeHandler} 
                        type="text" 
                        id="address" 
                        name="address" 
                        placeholder="Your Address..." 
                        value={this.state.address}
                        required />

                    <label>Phone Number:</label>
                    <input 
                        onChange={this.phoneChangeHandler} 
                        type="text" 
                        id="phone" 
                        name="phonenumber" 
                        placeholder="Your Phone Number..." 
                        value={this.state.phone}
                        required />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddPerson;