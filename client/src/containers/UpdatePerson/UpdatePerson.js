import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./UpdatePerson.css";
import axios from "axios";

class UpdatePerson extends Component {
    state = {
        id: this.props.match.params.id,
        name: "",
        surname: "",
        city: "",
        address: "",
        phone: ""
    }

    componentDidMount() {
        // Fetch the user by id
        let id = this.props.match.params.id;

        if(id) {
            // Find the user's object
            let user = this.props.persons.filter(person => person._id === id);

            // Populate input fields, so that user can update them
            this.setState({
                ...this.state,
                name: user[0].name,
                surname: user[0].surname,
                city: user[0].city,
                address: user[0].address,
                phone: user[0].phone
            });
        }
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

    updatePersonHandler = (event) => {
        // Prevent reloading the page
        event.preventDefault();

        if(this.props.match.params.id) {
            // Prepare data for post/update request
            const person = {
                id: this.state.id,
                name: this.state.name,
                surname: this.state.surname,
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
    }

    render() {

        return (
            <div className={classes.Form}>
                <form onSubmit={this.updatePersonHandler}>
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

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
};

export default connect(mapStateToProps)(UpdatePerson);