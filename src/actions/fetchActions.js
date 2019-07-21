import { FETCH_RESTAURANTS } from "./types";
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
      console.log("i ran a fetch request");
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: businesses
      });
      // setFetchingData(false);
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
      // setServerMessage(message);
    });
};
