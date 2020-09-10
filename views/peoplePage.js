import React, { Component } from "react";
import PersonCard from "../components/personCard";
import { getAllPeople } from "../services/peopleAPI";
import LoadingPage from "../components/loadingPage";


class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = { allPeopleArrey: [] };
  }
  componentDidMount() {
    getAllPeople().then(people => {
      this.setState({ allPeopleArrey: people });
      console.log(people)
    });
  }

  render() {
     if (this.state.allPeopleArrey.length === 0) {
      return (
        <LoadingPage/>
            );
    }

    const allComponents = this.state.allPeopleArrey.map(person => {
      return (
        <PersonCard
        hrefToPersonID={person.id}
          imageSource={person.picture}
          name={person.firstName + " " + person.lastName}
          jobTitle={person.position}
          key={person.id + "person"}
        />
      );
    });

    return <div className="people-page-div">{allComponents}</div>;
  }
}

export default PeoplePage;
