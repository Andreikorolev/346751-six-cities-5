import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import Header from "../header/header";
import Main from "../main/main";
import CitiesList from "../cities-list/cities-list";
import OffersList from "../offers-list/offers-list";
import OffersMap from "../offers-map/offers-map";


const MainPage = ({offers, city, onCityChange}) => {

  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main renderClassName={() => (`page__main--index`)}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          city={city}
          onCityChange={onCityChange}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{(offers.length)} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {/* <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul> */}
              </form>
              <OffersList
                offers={offers}
                renderClassName={() => (`cities__places-list tabs__content`)}
                renderOfferMark={() => (true)}
              />
            </section>
            <div className="cities__right-section">
              <OffersMap
                offers={offers}
                activeZoomControl={false}
                activeScrollWheelZoom={true}
              />
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};


MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(item) {
    dispatch(ActionCreator.cityChange(item));
    dispatch(ActionCreator.getOffersList(item));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
