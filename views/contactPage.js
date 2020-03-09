import React, { Component } from "react";
import ContactInput from "../components/contactInput";

class ContactPage extends Component {
constructor(props){
  super(props);
  this.state = {startInputText : "Awesome Page"}
}

  render() {
    const {
      innerPlaceholder, startText
    } = this.props;

    return (
      <div id="contactPageDiv">
        <div id="contact-form-div">
          <h1>Contact Form</h1>
          <form>
            <ContactInput inputClassName ="contact-input" innerPlaceholder="Your name"/>
            <ContactInput inputClassName ="contact-input" innerPlaceholder="Your Email Adress"/>
            <ContactInput inputClassName ="contact-input" innerPlaceholder="Your phone Number"/>
            <ContactInput inputClassName ="contact-input" innerPlaceholder="Your Web Site"/>
            <ContactInput inputClassName ="contactStartTextInput" innerPlaceholder="Type your message here"/>
            
          </form>
          <button id="contactSubmitButton">Submit</button>
        </div>
      </div>
    );
  }
}

export default ContactPage;
