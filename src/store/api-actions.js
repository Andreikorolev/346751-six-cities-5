import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, response.data.email)))
    .catch(() => {
      // throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, email)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
