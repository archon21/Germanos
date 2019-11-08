import React, { Component } from 'react';

class Menu extends Component {
  state = {
    selected: ''
  };
  handleSelect = option => {
    this.setState({ selected: option });
  };
  render() {
    const { options, func } = this.props;
    const { selected } = this.state;
    return (
      <div className="menu">
        <button className="button ">
          {selected === '' ? 'Nothing Selected' : selected}
        </button>
        <div className="menu-content">
          {options.map(option => {
            return (
              <div
                key={option}
                className="menu-item flex column align-center justify-center"
                onClick={() => {
                  this.handleSelect(option);
                  func(option);
                }}
              >
                <span className="body-1 px-5px">{option}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Menu;
