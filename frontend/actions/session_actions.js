import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => (
  APIUtil.login(user)
         .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
         .fail(errors => dispatch(receiveErrors(errors)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
         .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
         .fail(errors => dispatch(receiveErrors(errors)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(response =>
    dispatch(receiveCurrentUser(null))
));
