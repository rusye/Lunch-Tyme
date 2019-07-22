import React from "react";
import "./BusinessDetails.css";
import GoogleMap from "./GoogleMap";

export default function BusinessDetails(props) {
  let restaurant = props.restaurant;
  let lat = restaurant.location.lat;
  let lng = restaurant.location.lng;

  return (
    <>
      {props.view === restaurant.name ? (
        <div className="restaurantDetails">
          <div className="map">
            {props.view === restaurant.name ? (
              <GoogleMap lat={lat} lng={lng} />
            ) : null}
          </div>
          <div className="nameCategory">
            <h2 className="companyName">{restaurant.name}</h2>
            <p className="font12">{restaurant.category}</p>
          </div>

          <div className="locationContact">
            <div className="address">
              <p>
                {restaurant.location.address}
                <br />
                {restaurant.location.city}, {restaurant.location.state}{" "}
                {restaurant.location.postalCode}
              </p>
            </div>

            {restaurant.contact ? (
              <div className="contactInfo">
                {restaurant.contact.formattedPhone ? (
                  <p>{restaurant.contact.formattedPhone}</p>
                ) : null}
                {restaurant.contact.twitter ? (
                  <p>@{restaurant.contact.twitter}</p>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
