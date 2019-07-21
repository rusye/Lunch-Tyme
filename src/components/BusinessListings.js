import React from "react";
import { connect } from "react-redux";
import "./BusinessListings.css";

const BusinessListings = (props) => {
  const viewBusiness = e => {
    e.preventDefault();
    let business = encodeURIComponent(e.target.id)
    props.history.push(`/${business}`);
  };

  return (
    <div>
      {props.fetchingData ? (
        <h1>Fetching Data</h1>
      ) : props.serverMessage ? (
        <h1>{props.serverMessage}</h1>
      ) : (
        props.restaurants.map((restaurant, index) => (
          <div key={index} id={restaurant.name} onClick={viewBusiness}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.category}</p>
          </div>
        ))
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  restaurants: state.app.restaurants,
  fetchingData: state.app.fetchingData,
  serverMessage: state.app.serverMessage
});

export default connect(
  mapStateToProps,
  {}
)(BusinessListings);
