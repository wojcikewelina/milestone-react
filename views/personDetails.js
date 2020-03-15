import React, { Component } from "react";
import { getPerson } from "../services/peopleAPI";

class PersonDetails extends Component {
  render() {
    const personId = this.props.match.params.id;
    const person = getPerson(personId);
    console.log(person);

    return (
      <div className = "personDetailsWholeDiv">
        <div className="personDetailsPicture">
          <img src={person.picture} />
        </div>
        <div className = "personDetailsData">
          <div>
            <span >position: </span>
            <strong className="text-capitalization">{person.position}</strong>
          </div>
          <div >
            <span>first name: </span>
            <strong className="text-capitalization">{person.firstName}</strong>
          </div>
          <div>
            <span >last name: </span>
            <strong className="text-capitalization">{person.lastName}</strong>
          </div>
          <div>
            <span>gender: </span>
            <strong>{person.gender}</strong>
          </div>
          <div>
            <span>id: </span>
            <strong>{person.id}</strong>
          </div>
          <div>
            <span>mobile: </span>
            <strong>{person.mobile}</strong>
          </div>
          <div>
            <span>email: </span>
            <strong>{person.email}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonDetails;
