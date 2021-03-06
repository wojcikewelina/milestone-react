import React, { Component } from "react";

export default class ContactInput extends Component {
  render() {
    const { innerPlaceholder, inputClassName, updateState } = this.props;
    return (
      <input
        className={inputClassName}
        type="text"
        placeholder={innerPlaceholder}
        onChange={updateState}
      />
    );
  }
}
