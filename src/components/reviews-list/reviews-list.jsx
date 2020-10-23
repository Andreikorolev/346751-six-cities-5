import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item";
import CommentForm from "../comment-form/comment-form";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review, i) => (
            <ReviewItem
              key={`${i}-review`}
              review={review}
            />
          ))
        }
      </ul>
      <CommentForm/>
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
