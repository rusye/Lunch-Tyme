import React from "react";
import { connect } from "react-redux";
import "./BusinessListings.css";

const BusinessListings = props => {
  const viewBusiness = e => {
    e.preventDefault();
    let business = encodeURIComponent(e.target.id);
    props.history.push(`/${business}`);
  };

  return (
    <div className="businessListings row">
      {props.fetchingData ? (
        <h1>Fetching Data</h1>
      ) : props.serverMessage ? (
        <h1>{props.serverMessage}</h1>
      ) : (
        props.restaurants.map((restaurant, index) => (
          <div
            key={index}
            id={restaurant.name}
            onClick={viewBusiness}
            className="listingBefore col-6"
          >
            <div
              className="listing"
              style={{
                backgroundImage: `url(${restaurant.backgroundImageURL})`
              }}
            >
              <div className="text">
                <h2 className="companyName">{restaurant.name}</h2>
                <p className="font12">{restaurant.category}</p>
              </div>

              <div className="gradient" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  restaurants: state.app.restaurants,
  fetchingData: state.app.fetchingData,
  serverMessage: state.app.serverMessage
});

export default connect(
  mapStateToProps,
  {}
)(BusinessListings);
