import React, { Component } from 'react';
import { connect } from 'react-redux';

class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <div className="reviews flex column align-center w-90 py-25px">
        <span className="headline-3">Reviews</span>
        {reviews.map(review => {
          const {
            author_name,
            rating,
            relative_time_description,
            text
          } = review;
          return (
            rating > 3 && (
              <div className="reviews__single flex column align-center w-100 py-20px my-10px background-tirciary color-secondary">
                <div className="flex row align-center px-10px">
                  <span className="body-1 color-secondary">{author_name}</span>
                  <span className="body-1 color-secondary">{rating}</span>
                  <span className="body-1 color-secondary">
                    {relative_time_description}
                  </span>
                </div>
                <span className="body-1 color-secondary px-20px">{text}</span>
              </div>
            )
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.init.reviews
});

export default connect(mapStateToProps)(Reviews);
