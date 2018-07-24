import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../../components/Person/Person";
import * as actions from "../../store/actions";
import * as classes from "./Home.css";
import axios from "axios";

class Home extends Component {
    componentDidMount() {
        this.props.onInitPersons();
    }

    deletePersonHandler = (id) => {
        let personData = {
            id: id
        }

        // Delete a person
        axios.delete("/api/person", { data: personData })
            .then(response => {
                this.props.onInitPersons();
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        // Create all table cells
        const persons = this.props.persons.map(person => {
            return <Person 
                        key={person._id}
                        name={person.name}
                        surname={person.surname}
                        createdDate={person.createdDate}
                        city={person.city}
                        address={person.address}
                        phone={person.phone}
                        delete={() => this.deletePersonHandler(person._id)}/>
        });

        return (
            <div className={classes.Table}>
                <table className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th className="table-head" scope="col">Name</th>
                    <th className="table-head" scope="col">Surname</th>
                    <th className="table-head" scope="col">Created Date</th>
                    <th className="table-head" scope="col">City</th>
                    <th className="table-head" scope="col">Address</th>
                    <th className="table-head" scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {persons}
                </tbody>
            </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitPersons: () => dispatch(actions.fetchPersons())
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home);