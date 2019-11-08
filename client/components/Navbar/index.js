import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavHButton from './NavHButton';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';
import Contact from '../Contact';

class Navbar extends Component {
  state = {
    open: true,
    selectedLink: ''
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const arr = pathname.split('/');
    const selectedLink = arr[arr.length - 1];
    this.setState({ selectedLink });
  }

  toggleNavH = () => {
    const css = !this.state.open;
    this.setState({ open: css });
  };

  openContact = () => {
    this.props.alertInteraction(true, <Contact />);
  };

  selectLink = link => {
    this.setState({ selectedLink: link });
  };

  render() {
    const { open, selectedLink } = this.state;
    const { phone } = this.props;
    return (
      <nav
        id="nav"
        className="flex row wrap black align-center justify-space-evenly py-5px"
      >
        <Link to="/" className="nav__logo flex row align-center">
          <div className="flex column ">
            <span className="body-2 color-white">493 Westchester Rd.</span>
            <span className="body-2 color-white">Colchester, CT</span>

            <div className="flex row wrap">
              <a href="" className="nav__button" target="_blank">
                <i className="fas fa-map-pin nav__button__icon " />
              </a>
              <a href="" className="nav__button" target="_blank">
                <i className="fas fa-envelope nav__button__icon " />
              </a>
            </div>
          </div>

          <div className="flex column align-start mx-20px">
            <span className="nav__logo-text py-10px">
              Germano's Bar & Grill
            </span>

            <span className="headline-5 margin-0 color-white">{phone}</span>
          </div>
        </Link>

        <Link
          className={`headline-6 p-5px nav__link ${selectedLink === 'home' ||
            (selectedLink === '' && 'selected')}`}
          to={{ pathname: '/home' }}
          onClick={() => this.selectLink('home')}
        >
          HOME
        </Link>
        <Link
          className={`headline-6 p-5px nav__link ${selectedLink === 'menu'}`}
          to={{ pathname: '/menu' }}
          onClick={() => this.selectLink('menu')}
        >
          MENU
        </Link>
        <Link
          className={`headline-6  p-5px nav__link ${selectedLink === 'info' &&
            'selected'}`}
          to={{ pathname: '/info' }}
          onClick={() => this.selectLink('info')}
        >
          ABOUT
        </Link>
        <a
          className={`headline-6  p-5px nav__link ${selectedLink ===
            'contact' && 'selected'}`}
          onClick={() => this.selectLink('contact')}
        >
          CONTACT
        </a>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  phone: state.init.phone
});

const mapDispatchToProps = dispatch => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);