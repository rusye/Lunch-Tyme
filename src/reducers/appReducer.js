import { FETCH_RESTAURANTS, FETCH_ERROR } from "../actions/types";

const initialState = {
  restaurants: [],
  fetchingData: true,
  serverMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
        fetchingData: action.fetching
      };

    case FETCH_ERROR:
      return {
        ...state,
        fetchingData: false,
        serverMessage: action.error
      };
    default:
      return state;
  }
}
