import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Block,
  WindoW,
  Panel,
  Divider,
  Animator
} from '../sub-components/containers';
import { Video, Fab, List, Table, Carousel } from '../sub-components';
import Hours from '../sub-components/unique/Hours';
import PizzaSpecials from '../sub-components/unique/PizzaSpecials';
import Social from '../sub-components/unique/Social';
import {
  BillardBlurb,
  BarBlurb,
  CateringBlurb
} from '../sub-components/unique/Blurb';
import Reviews from '../sub-components/unique/Reviews';

class Home extends Component {
  state = {
    scrolled: 0
  };
  aboutBlock = React.createRef();
  aboutPicture = React.createRef();
  charity2 = React.createRef();
  charity3 = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    this.setState({ scrolled: window.pageYOffset });
  };

  render() {
    const { aboutBlock, aboutPicture, state, props } = this;
    const { events } = props;
    const { scrolled } = state;

    return (
      <div style={{ overflowX: 'hidden' }} className="flex column align-center">
        <Divider
          border
          backgroundColor="background-secondary"
          color="color-primary"
        >
          <div className="flex row align-center wrap">

            <h1 className="headline-3 cursive">Coming up at Germanos’s!</h1>
            <Social />
          </div>
        </Divider>
        <WindoW
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/germanos-76121.appspot.com/o/backgrounds%2Fwhole_bar.jpg?alt=media&token=91acd87f-eb18-4075-bbc9-2bea70dd99eb"
          row
        >
          <Carousel
            contain
            maxHeight="maxh-80vh"
            height="h-800px"
            width="w-70"
            items={events}
          />
        </WindoW>
        {/* <Divider
          border
          backgroundColor="background-secondary"
          color="color-primary"
        >
          <h1 className="headline-3 cursive">Services</h1>
        </Divider> */}

        <WindoW column background="background-secondary">
          <Divider
            border
            backgroundColor="background-primary"
            color="color-secondary"
          >
            <h1 className="headline-4 cursive">Billards</h1>
          </Divider>
          <div className="flex row align-center w-100 wrap">
            <img
              className="home__img"
              src="https://firebasestorage.googleapis.com/v0/b/germanos-76121.appspot.com/o/backgrounds-jan%2FIMG_1384.JPG?alt=media&token=db8ef2ef-14ed-4fba-92e7-21e3ed8c2b39"
            ></img>
            <Block column type="info-card" height="h-auto" width="maxw-600px">
              <BillardBlurb />
            </Block>
          </div>
        </WindoW>
        <WindoW column background="background-secondary">
          <Divider
            border
            backgroundColor="background-primary"
            color="color-secondary"
          >
            <h1 className="headline-4 cursive">Grill</h1>
          </Divider>
          <div className="flex row align-center w-100 wrap">
            <img
              className="home__img"
              src="https://firebasestorage.googleapis.com/v0/b/germanos-76121.appspot.com/o/backgrounds-jan%2FIMG_1384.JPG?alt=media&token=db8ef2ef-14ed-4fba-92e7-21e3ed8c2b39"
            ></img>
            <Block column type="info-card" height="h-auto" width="maxw-600px">
              <CateringBlurb />
            </Block>
          </div>
        </WindoW>
        <WindoW column background="background-secondary">
          <Divider
            border
            backgroundColor="background-primary"
            color="color-secondary"
          >
            <h1 className="headline-4 cursive">Bar & Grill</h1>
          </Divider>
          <div className="flex row align-center w-100 wrap">
            <img
              className="home__img"
              src="https://firebasestorage.googleapis.com/v0/b/germanos-76121.appspot.com/o/backgrounds-jan%2FIMG_1384.JPG?alt=media&token=db8ef2ef-14ed-4fba-92e7-21e3ed8c2b39"
            ></img>
            <Block column type="info-card" height="h-auto" width="maxw-600px">
              <BarBlurb />
            </Block>
          </div>
        </WindoW>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // updates: state.firebase.updates,
  // specials: state.firebase.specials,
  // phone: state.init.phone,
  // gallery: state.firebase.images[2].images,
  events: state.firebase.events
});

export default connect(mapStateToProps)(Home);
