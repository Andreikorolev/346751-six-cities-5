import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {ActionCreator} from "./store/action";
import {fetchOffers, checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AAUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

Promise.all([
  store.dispatch(fetchOffers()),
  store.dispatch(checkAuth()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
});
