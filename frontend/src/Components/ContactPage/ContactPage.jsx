import "./ContactPage.css";
import emailjs from "@emailjs/browser";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sentImg from "../../assets/sent.jpg"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
       {/* <div id="filterToggle">
            <input type="checkbox" />

            <span className="spn-fil"></span>
            <span className="spn-fil"></span>
            <span className="spn-fil"></span>

            <span id="span-filter">Filters</span>

            <div className="filterBox" id="menu">
              <span className="typ">Price</span>
              <div className="price-input-boxes">
                <input
                  type="number"
                  placeholder="Min"
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="prp-ip"
                />
                <input
                  type="number"
                  placeholder="Max"
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="prp-ip"
                />

                <button className="prp-but" onClick={priceHandler}>
                  Search
                </button>
              </div>

              <span className="typ">Categories</span>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="category-link"
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>

              <span component="legend" className="typ">
                Ratings Above
              </span>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRating(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                valueLabelStep={0.1}
                min={0}
                max={5}
              />

              <button className="prp-but" onClick={resetFilters}>
                Reset
              </button>
            </div>
          </div> */}
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
