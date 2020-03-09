import React, { Component } from "react";
import ContactInput from "../components/contactInput";

let allImputs;

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      webSiteName: "",
      randomMessege: "Awesome page"
    };
  }

  componentDidMount() {
    allImputs = document.getElementsByClassName("all-input");
  }

  onNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  onPhoneNumberChange = event => {
    this.setState({
      phoneNumber: event.target.value
    });
  };

  onWebSiteChange = event => {
    this.setState({
      webSiteName: event.target.value
    });
  };

  onRandomTextChange = event => {
    this.setState({
      randomMessege: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  sendDataOnClick = () => {
    const arreyOfData = [
      "Your Name: " + this.state.name,
      "Your email: " + this.state.email,
      "your phoneNumber: " + this.state.phoneNumber,
      "Your Web site: " + this.state.webSiteName,
      "Message from youis: " + this.state.randomMessege
    ];

    console.log(arreyOfData);

    for (var i=0; i<allImputs.length;i++){
      allImputs[i].value=""
    }
  };

  render() {
    const { innerPlaceholder, startText } = this.props;

    return (
      <div id="contactPageDiv">
        <div id="contact-form-div">
          <h1>Contact Form</h1>
          <form onSubmit={this.handlesubmit}>
            <ContactInput
              inputClassName="contact-input all-input"
              innerPlaceholder="Your name"
              updateState={this.onNameChange}
            />
            <ContactInput
              inputClassName="contact-input all-input"
              innerPlaceholder="Your Email Adress"
              updateState={this.onEmailChange}
            />
            <ContactInput
              inputClassName="contact-input all-input"
              innerPlaceholder="Your phone Number"
              updateState={this.onPhoneNumberChange}
            />
            <ContactInput
              inputClassName="contact-input all-input"
              innerPlaceholder="Your Web Site"
              updateState={this.onWebSiteChange}
            />
            <ContactInput
              inputClassName="contactStartTextInput all-input"
              innerPlaceholder="Type your message here"
              updateState={this.onRandomTextChange}
              startValue ={this.state.randomMessege}
            />
          </form>
          <button onClick={this.sendDataOnClick} id="contactSubmitButton">
            Submit!
          </button>
        </div>
      </div>
    );
  }
}

export default ContactPage;
