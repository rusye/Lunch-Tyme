import { FETCH_RESTAURANTS, FETCH_ERROR } from "./types";
import { normalizeResponseErrors } from "../functions/normalizeResponse";

export const fetchRestaurants = () => dispatch => {
  fetch(
    "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json",
    {
      method: "GET"
    }
  )
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      return res.json();
    })
    .then(businesses => {
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: businesses.restaurants,
        fetching: false
      });
    })
    .catch(err => {
      console.log(err);
      let message;
      if (err.code === 404) {
        message = err.message;
      } else if (err.code === 500) {
        message = "Internal server error";
      } else {
        message = "Something went wrong, please try again later";
      }
      dispatch({
        type: FETCH_ERROR,
        error: message
      });
    });
};
