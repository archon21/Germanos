import React, { Component } from 'react';
import { sendMessage } from '../store';
import { connect } from 'react-redux';
import { WindoW, Block, Flex } from '../sub-components/containers';
import Hours from '../sub-components/unique/Hours';
import { Blurb } from '../sub-components/unique/Blurb';

class Info extends Component {
  render() {
    const { company, address } = this.props;
    console.log('YOOOOOOOO');
    console.log(address);
    return (
      <WindoW
        backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/marias-back.png?alt=media&token=e3c66a2a-3be8-44a7-a85a-b2b9f25bbe4c"
        column
        background="background-secondary"
      >
        <div className="flex row wrap align-center justify-center w-100 my-30px">
          <Block
            column
            type="info-card"
            maxWidth="maxw-600px"
            height="h-auto"
            width="w-90"
            full
          >
            <h4 className="headline-4 color-tirciary p-20px">{company}</h4>
            <Blurb address={address} />
          </Block>
          <img
            className="w-100 maxw-600px minw-325px m-auto"
            src="https://firebasestorage.googleapis.com/v0/b/germanos-76121.appspot.com/o/site-images%2Fabout.jpg?alt=media&token=85c642d2-e2b0-4d98-879b-f70f694e370c"
          ></img>
          {/* <Block
            column
            type="info-card"
            maxWidth="maxw-400px"
            height="h-500px"
            width="w-90"
            full
          >
            <Hours />
          </Block> */}
        </div>
        <div className="flex row wrap align-center justify-center w-100 my-30px">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.026637735555!2d-72.41396778428033!3d41.547020479249774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e64125491859e3%3A0xd35fd3ff19228e33!2sGermano&#39;s%20Ristorante%20%26%20Bar!5e0!3m2!1sen!2sus!4v1581012798877!5m2!1sen!2sus"
            className="info__map "
            frameBorder="0"
            // style="border:0;"
            allowFullScreen=""
          ></iframe>
        </div>
      </WindoW>
    );
  }
}

const mapStateToProps = state => ({
  company: state.init.company,
  address: state.init.address
});

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);
