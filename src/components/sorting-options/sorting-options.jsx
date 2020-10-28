import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class SortingOptions extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  render() {

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={() => {
            this.setState((prevState) => ({
              isOpened: !prevState.isOpened
            }));
          }}
        >
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isOpened ? `places__options--opened` : ``} `}>
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
    );
  }
}

SortingOptions.propTypes = {
  onSortClick: PropTypes.func.isRequired,
};

export default SortingOptions;
