import "./ContactPage.css";
import emailjs from "@emailjs/browser";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sentImg from "../../assets/sent.jpg"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Metadata from "../Metadata";

class ContactPage extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  constructor() {
    super();

    this.state = {
      sent: false,
    };
  }

  sendMsg() {
    this.setState({ sent: !this.state.sent });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      from_email: email,
      from_name: name,
      message: message,
    };
    emailjs.send(
      "service_e99wro5",
      "template_302ruio",
      templateParams,
      "9WX-1IzJ-8yQIOf6m"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });

  };

  render() {

    let btn_class1 = this.state.sent ? "afterSent" : "beforeSent";
    let btn_class2 = this.state.sent ? "beforeSent" : "afterSent";
    
    return (
      <>
      <Metadata title="Contact Page" />
        <div className="contactContainer" id="ContactPage">
          <div className="contactHeading">
            <h1 id="aboutText">CONTACT</h1>
          </div>
          <div className="contactUs">
            <div className="contactLeft">
              <div className="contactDesc">
                <h1>Contact Me</h1>
                <p>
                  Got an exciting project in mind? Let's bring your digital
                  dreams to life! Reach out to me today and together we'll build
                  an exceptional web presence that stands out from the crowd.
                </p>
              </div>
              <div className="contactSocial">
                <div className="socialCard">
                  <a href="mailto:rajsrivastav0603@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h3>Email</h3>
                    <span id="cmail">rajsrivastav0603@gmail.com</span>
                  </a>
                </div>
                <div className="socialCard">
                  <a href="tel:+918421843544">
                    <FontAwesomeIcon icon={faPhone} />
                    <h3>Phone</h3>
                    <span>8421843544</span>
                  </a>
                </div>
                <div className="socialCard">
                  <a href="https://www.github.com/Raj0603" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h3>Github</h3>
                    <span>Raj0603</span>
                  </a>
                </div>
                <div className="socialCard">
                  <a
                    href="https://www.linkedin.com/in/rajsrivastavb4a8221b1"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h3>LinkedIn</h3>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="contactRight" id={btn_class1}>
              <form id="contactform" onSubmit={this.handleSubmit.bind(this)}>
                <input
                  className="inp"
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  required
                  value={this.state.name}
                  onChange={this.handleChange.bind(this, "name")}
                />
                <input
                  className="inp"
                  type="text"
                  placeholder="Email"
                  name="user_email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange.bind(this, "email")}
                />
                <textarea
                  className="inp"
                  placeholder="Message"
                  required
                  value={this.state.message}
                  onChange={this.handleChange.bind(this, "message")}
                />

                <button className="submit" type="submit" onClick={this.sendMsg.bind(this)}>
                  Send
                </button>
              </form>
            </div>

            <div className="contactRight" id={btn_class2} >
              <div className="sendBox">

              <span id="ymss">Your message has been sent successfully</span>
              <img src={sentImg} alt="" id="sentImg"/>
              <button className="submit" onClick={this.sendMsg.bind(this)}> Send Another</button>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactPage;
