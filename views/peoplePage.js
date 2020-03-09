import React, { Component } from "react";
import PersonCard from "../components/personCard";
import { getAllPeople } from "../services/peopleAPI";

class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = { allPeopleArrey: [] };
  }
  componentDidMount() {
    getAllPeople().then(people => {
      this.setState({ allPeopleArrey: people });
    });
  }

  render() {
    const { imageSource, name, jobTitle } = this.props;

    if (this.state.allPeopleArrey.length === 0) {
      return (
        <div id="loadingDiv">
          <img src="https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif" />
        </div>
      );
    }

    const allComponents = this.state.allPeopleArrey.map(person => {
      return (
        <PersonCard
          imageSource={person.picture}
          name={person.firstName + " " + person.lastName}
          jobTitle={person.position}
          key={person.id + "person"}
        />
      );
    });

    return <div id="peoplePageDiv">{allComponents}</div>;
  }
}

export default PeoplePage;
