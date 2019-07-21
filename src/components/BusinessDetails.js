import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./BusinessDetails.css";
// import { GOOGLE_API_KEY } from "./config";

const BusinessDetails = props => {
  const [business, setBusiness] = useState();

  useEffect(() => {
    const businessName = decodeURIComponent(
      props.location.pathname.substr(
        props.location.pathname.lastIndexOf("/") + 1
      )
    );

    const findBusiness = business => {
      return business.name === businessName;
    };

    const businessDetsails = props.restaurants.find(findBusiness);
    setBusiness(businessDetsails);
  }, [props.location.pathname, props.restaurants]);

  return (
    <div>
      {business === undefined ? (
        <h1>Fetching Data</h1>
      ) : props.serverMessage ? (
        <h1>{props.serverMessage}</h1>
      ) : (
        <div>
          <div className="nameCategory">
            <h2>{business.name}</h2>
            <p>{business.category}</p>
          </div>

          <div className="address">
            <p>
              {business.location.address}
              <br />
              {business.location.city}, {business.location.state}{" "}
              {business.location.postalCode}
            </p>
          </div>

          {business.contact ? (
            <div className="contactInfo">
              {business.contact.formattedPhone ? (
                <p>{business.contact.formattedPhone}</p>
              ) : null}
              {business.contact.twitter ? (
                <p>@{business.contact.twitter}</p>
              ) : null}
            </div>
          ) : null}
        </div>
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
)(BusinessDetails);
