import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavHButton from './NavHButton';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';
import Contact from '../Contact';
import { Panel } from '../../sub-components/containers';

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
        className="flex column black align-center justify-center py-5px"
      >
        <div className="flex row wrap align-center justify-center">
          <div className="nav__logo flex row wrap align-center ">
            <Link to="/" className="nav__logo-text m-auto text-center py-10px">
              Germano's Bar & Grill
            </Link>
            <div className="flex row wrap align-center m-auto justify-center mx-10px">
              {/* <a onClicdclassName="nav__button" target="_blank">
                <i className="fas fa-envelope nav__button__icon " />
              </a> */}
              <span className="headline-5 mx-10px color-white">{phone}</span>
              <a
                href="https://goo.gl/maps/DFvXuHnsyFg6b5PZ6"
                className="nav__button"
                target="_blank"
              >
                <i className="fas fa-map-pin nav__button__icon " />
              </a>
              {/* <div className="flex column nav__logo mx-10px">
                <span className="body-2 color-white">493 Westchester Rd.</span>
                <span className="body-2 color-white">Colchester, CT</span>
              </div> */}
            </div>
          </div>

          <div className="flex row wrap align-center justify-center m-auto">
            <Link
              className={`headline-4 p-5px nav__link ${selectedLink ===
                'home' ||
                (selectedLink === '' && 'selected')}`}
              to={{ pathname: '/home' }}
              onClick={() => this.selectLink('home')}
            >
              HOME
            </Link>
            <Link
              className={`headline-4 p-5px nav__link ${selectedLink ===
                'menu'}`}
              to={{ pathname: '/menu' }}
              onClick={() => this.selectLink('menu')}
            >
              MENU
            </Link>
            <Link
              className={`headline-4 p-5px nav__link ${selectedLink ===
                'drinks'}`}
              to={{ pathname: '/drinks' }}
              onClick={() => this.selectLink('drinks')}
            >
              DRINKS
            </Link>
            <Link
              className={`headline-4  p-5px nav__link ${selectedLink ===
                'info' && 'selected'}`}
              to={{ pathname: '/info' }}
              onClick={() => this.selectLink('info')}
            >
              ABOUT
            </Link>
            {/* <a
            className={`headline-4  p-5px nav__link ${selectedLink ===
              'contact' && 'selected'}`}
            onClick={() => this.selectLink('contact')}
          >
            CONTACT
          </a> */}
          </div>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
