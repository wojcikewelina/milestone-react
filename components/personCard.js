import React, { Component } from "react";

export default class PersonCard extends Component {
  render() {
const {imageSource, name, jobTitle} = this.props;

    return (
      <div className="person-card-div">
        <img className="person-img"src={imageSource}/>
        <div className="person-text-div">
          <strong>{name}</strong>
          <div>{jobTitle}</div>
        </div>
      </div>
    );
  }
}
