import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../../components/Person/Person";
import * as actions from "../../store/actions";
import * as classes from "./Home.css";

class Home extends Component {
    componentDidMount() {
        this.props.onInitPersons();
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
                        phone={person.phone}/>
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