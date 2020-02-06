import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Social from '../../sub-components/unique/Social';
import { Blurb } from '../../sub-components/unique/Blurb';
import Hours from '../../sub-components/unique/Hours';
import { sendMessage } from '../../store';
import Reviews from '../../sub-components/unique/Reviews';

class Footer extends Component {
  state = { name: '', email: '', message: '', feedback: '' };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, message } = this.state;
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      this.setState({
        feedback: 'Fill out all fields before sending your message.'
      });
    } else {
      this.props.sendMessage(this.state);
      this.setState({
        feedback: 'Your message has been sent.',
        name: '',
        message: '',
        email: ''
      });
    }
  };

  render() {
    const { phone, company, address } = this.props;
    const { email, name, message, feedback } = this.state;

    return (
      <footer
        id="footer"
        className="flex column align-center justify-center wrap "
      >
        <Reviews></Reviews>
        <form
          onSubmit={this.handleSubmit}
          className="flex column align-center justify-center w-100 background-mimosa"
        >
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            className="textfield m-10px w-40"
          />
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="textfield m-10px w-40"
          />

          <textarea
            placeholder="Message"
            name="message"
            value={message}
            onChange={this.handleChange}
            className="w-80 textfield multi m-10px"
          />
          <h5 className="headline-5">{feedback}</h5>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
        <div className="flex row align-center justify-center wrap">
          <Blurb address={address} footer />
          <div className="footer__item flex column align-center">
            <div className="footer__blurb__map">
              <a
                className="footer__blurb__map__link"
                target="_blank"
                href="https://goo.gl/maps/oBPVBj7rsStng6PW6"
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.0632658027735!2d-72.41359498432226!3d41.54622739409548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e64125491859e3%3A0xd35fd3ff19228e33!2sGermano&#39;s%20Bar%20%26%20Grill!5e0!3m2!1sen!2sus!4v1575521149621!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen=""
                className="footer__blurb__map__iframe"
              ></iframe>
            </div>

            <Social footer />
            <div className="flex row wrap align-center justify-center">
              <Link
                to="/privacy"
                className="body-1 link color-secondary py-5px"
              >
                Privacy
              </Link>
              <Link to="/home" className="body-1 link color-secondary py-5px">
                Home
              </Link>
              <Link to="/menu" className="body-1 link color-secondary py-5px">
                Menu
              </Link>
              <Link
                to="/specials"
                className="body-1 link color-secondary py-5px"
              >
                Specials
              </Link>
              <Link to="/info" className="body-1 link color-secondary py-5px">
                Info
              </Link>
            </div>
            <p className="body-1 text-center">{phone}</p>
            <p className="body-2 text-center">
              © 2015 Copyright {company}. All rights reserved.
            </p>
          </div>
          <Hours footer />
        </div>
      </footer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message))
});

const mapStateToProps = state => ({
  phone: state.init.phone,
  company: state.init.company,
  address: state.init.address
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
