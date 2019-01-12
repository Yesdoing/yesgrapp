// Imports
import { API_URL } from "../../constants";
// Actions

// ActionCreators

// API Actions

function login(username, password) {
  return dispatch => {
    fetch(`${API_URL}/rest-auth/login/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };
}

// InitialState
const InitialState = {
  isLoggedIn: false
};

// Reducer

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Reduce Functions

// Export

const actionCreators = {
  login
};

export { actionCreators };

// Default Reducer Export

export default reducer;
