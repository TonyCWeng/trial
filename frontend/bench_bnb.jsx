import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import * as Actions from './actions/session_actions';

window.login = Actions.login;
window.signup = Actions.signup;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser} };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    window.store = store;
    ReactDOM.render(<Root store={ store } />, root);
});
