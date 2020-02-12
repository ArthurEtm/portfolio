import React, { Component } from "react";
import * as emailjs from "emailjs-com";
export default class ContactMe extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: ""
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, phoneNumber, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Air Stair Solutions",
      phoneNumber: phoneNumber,
      message_html: message
    };
    emailjs.send(
      "gmail",
      "template_VFZZ9dUH",
      templateParams,
      "user_XmSvfoBKQhPmLjMbCFfDq"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div className="feedbackform">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Name"
            ></input>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Email"
            />
            <input
              type="number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange.bind(this, "phoneNumber")}
              placeholder="Phone"
            />
            <input
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              placeholder="Subject"
            />
            <textarea
              name="message"
              rows="10"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    );
  }
}
