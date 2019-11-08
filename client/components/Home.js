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
            <Social />
            <h1 className="headline-3 cursive">This Week at Germanos’s!</h1>
          </div>

          {/* <a
            href="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=ee5f03dc-7efc-47ac-af86-48f90a9bff0a"
            target="_"
            className="flex row wrap justify-center align-center"
          >
            <h5 className="headline-4 cursive color-mimosa">
              Order from home with Füd Delivery{' '}
            </h5>
            <svg
              className="icon__fud"
              preserveAspectRatio="xMidYMid meet"
              data-bbox="28.001 52.001 143.998 95.998"
              viewBox="28.001 52.001 143.998 95.998"
              height="200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="img"
            >
              <g>
                <path
                  d="M162.999 133h-6v-6h6c1.655 0 3-1.351 3-3.01v-20.361c0-2.408-1.011-3.628-3-3.628h-4.764l-11.071-19.923c-.415-.589-1.341-1.078-2.334-1.078H121v-6h23.83a8.996 8.996 0 0 1 7.435 3.927L161.763 94h1.236c5.382 0 9 3.869 9 9.628v20.361c0 4.969-4.037 9.011-9 9.011z"
                  fill="#C6A105"
                  data-color="1"
                />
                <path
                  fill="#C6A105"
                  d="M124 133H76v-6h42V58H70v-5.999h54V133z"
                  data-color="1"
                />
                <path
                  fill="#C6A105"
                  d="M52.001 127v6h-15v-6h15z"
                  data-color="1"
                />
                <path
                  d="M144.973 147.999c-8.285 0-15.026-6.718-15.026-14.973s6.741-14.973 15.026-14.973 15.026 6.718 15.026 14.973-6.741 14.973-15.026 14.973zm0-23.947c-4.977 0-9.026 4.025-9.026 8.974 0 4.948 4.049 8.974 9.026 8.974 4.977 0 9.026-4.025 9.026-8.974 0-4.948-4.048-8.974-9.026-8.974z"
                  fill="#C6A105"
                  data-color="1"
                />
                <path
                  d="M64.027 147.999c-8.285 0-15.026-6.718-15.026-14.973s6.741-14.973 15.026-14.973 15.026 6.718 15.026 14.973-6.741 14.973-15.026 14.973zm0-23.947c-4.977 0-9.026 4.025-9.026 8.974 0 4.948 4.049 8.974 9.026 8.974s9.026-4.025 9.026-8.974c0-4.948-4.049-8.974-9.026-8.974z"
                  fill="#C6A105"
                  data-color="1"
                />
                <path fill="#C6A105" d="M133 127v6h-12v-6h12z" data-color="1" />
                <path
                  fill="#C6A105"
                  d="M150.999 103H127v-6h17.399l-4.896-7.339 4.993-3.331 6.503 9.752V103z"
                  data-color="1"
                />
                <path
                  fill="#C6A105"
                  d="M79 88v6H28.001v-6H79z"
                  data-color="1"
                />
                <path
                  fill="#C6A105"
                  d="M97.001 70v6h-45v-6h45z"
                  data-color="1"
                />
                <path fill="#C6A105" d="M46.001 70v6h-6v-6h6z" data-color="1" />
                <path fill="#C6A105" d="M64 52.001v6h-6v-6h6z" data-color="1" />
              </g>
            </svg>
          </a>

          */}
        </Divider>
        <WindoW
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/germanos-76121.appspot.com/o/backgrounds%2Fwhole_bar.jpg?alt=media&token=91acd87f-eb18-4075-bbc9-2bea70dd99eb"
          row
        >
          <Carousel
            contain
            maxHeight="maxh-100vh"
            height="h-800px"
            width="w-70"
            items={events}
          />
        </WindoW>
        <Divider
          border
          backgroundColor="background-secondary"
          color="color-primary"
        >
          <h1 className="headline-3 cursive">Services</h1>
        </Divider>
        <WindoW
          column
          relative
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/germanos-76121.appspot.com/o/backgrounds%2Fpool_tables.jpg?alt=media&token=1829ee03-2ff6-4741-b564-cdbe96935283"
        >
          <Block
            column
            type="info-card"
            height="h-auto"
            width="w-100"
            absolute
            position="bottom"
          >
            <BillardBlurb />
          </Block>
        </WindoW>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4 cursive">Billards</h1>
        </Divider>
        <WindoW
          column
          relative
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/germanos-76121.appspot.com/o/backgrounds%2Fbar.jpg?alt=media&token=332154cc-799d-41bc-a405-152b1035fe1a"
        >
          {/* <Carousel
            contain
            maxHeight="maxh-100vh"
            height="h-800px"
            width="w-70"
            items={specials}


          /> */}

          <Block
            column
            type="info-card"
            height="h-auto"
            width="w-100"
            absolute
            position="bottom"
          >
            <BarBlurb />
          </Block>
        </WindoW>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4 cursive">Bar & Grill</h1>
        </Divider>
        <WindoW
          column
          relative
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/germanos-76121.appspot.com/o/backgrounds%2Ftables.jpg?alt=media&token=721760d7-4a22-4729-9c4e-45632b41ee5e"
        >
          {/* <Carousel
            contain
            maxHeight="maxh-100vh"
            height="h-800px"
            width="w-70"
            items={specials}


          /> */}

          <Block
            column
            type="info-card"
            height="h-auto"
            width="w-100"
            absolute
            position="bottom"
          >
            <CateringBlurb />
          </Block>
        </WindoW>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4 cursive">Food</h1>
        </Divider>
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
