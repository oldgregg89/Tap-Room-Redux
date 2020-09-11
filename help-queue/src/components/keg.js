import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.location} - {props.name}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propsTypes = {
  Name: PropTypes.string.isRequired,
  ABV: PropsTypes.string.isRequired,
  Type: PropsTypes.string
  id: PropTypes.string,
}