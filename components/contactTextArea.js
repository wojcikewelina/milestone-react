import React, { Component } from "react";

export default class ContactTextArea extends Component {
  render() {
    const { innerPlaceholder, updateState, inputClassName, startValue } = this.props;

    return (
      <textarea
        className={inputClassName}
        placeholder={innerPlaceholder}
        onChange={updateState}
        value={startValue}
      />
    );
  }
}
