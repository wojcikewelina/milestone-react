import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PersonCard extends Component {
  render() {
    const {
      imageSource,
      name,
      jobTitle,
      showDetailPage,
      hrefToPersonID
    } = this.props;

    return (
     <Link className="link-to-person" to={"/person/" + hrefToPersonID}>
        <div className="person-card-div" onClick={showDetailPage}>
          <img className="person-img" src={imageSource} />
          <div className="person-text-div">
            <strong>{name}</strong>
            <div>{jobTitle}</div>
          </div>
        </div>
      </Link>
    );
  }
}
