import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FavoriteCard from "../favorite-card/favorite-card";
import Header from "../header/header";

class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="page">
        <Header/>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {
                      offers.map((offer) => {
                        if (offer[`city`] === `Amsterdam`) {
                          return (
                            <FavoriteCard
                              key={`${offer[`id`]}-${offer[`city`]}`}
                              offer={offer}
                              onHover={() => {
                                this.setState(() => ({
                                  activeCard: offer[`id`],
                                }));
                              }}
                            />
                          );
                        }
                        return false;
                      })
                    }
                  </div>
                </li>

                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {
                      offers.map((offer) => {
                        if (offer[`city`] === `Cologne`) {
                          return (
                            <FavoriteCard
                              key={`${offer[`id`]}-${offer[`city`]}`}
                              offer={offer}
                              onHover={() => {
                                this.setState(() => ({
                                  activeCard: offer[`id`],
                                }));
                              }}
                            />
                          );
                        }
                        return false;
                      })
                    }
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
    );
  }
}

FavoritesScreen.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default FavoritesScreen;
