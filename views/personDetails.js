import React, { Component } from "react";

class PersonDetails extends Component {
  render() {
    const {
      imageSource,
      name,
      jobTitle,
      showDetailPage,
      hrefToPersonID,
      lastName,
      gender,
      mobile,
      email
    } = this.props;

    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9Aa-An0VUAPjsGL3-3ClaTulsiAVhMNkufxXjxw15hiwwj4yu" />
        <div>
          <span>position: </span>
          <strong>{jobTitle}</strong>
        </div>
        <div>
          <span>first name: </span>
          <strong>{name}</strong>
        </div>
        <div>
          <span>last name: </span>
          <strong>{lastName}</strong>
        </div>
        <div>
          <span>gender: </span>
          <strong>{gender}</strong>
        </div>
        <div>
          <span>id: </span>
          <strong />
          {hrefToPersonID}
        </div>
        <div>
          <span>mobile: </span>
          <strong>{mobile}</strong>
        </div>
        <div>
          <span>email: </span>
          <strong >{email}</strong>
        </div>
      </div>
    );
  }
}

export default PersonDetails;
