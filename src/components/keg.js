import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.ABV} - {props.names} - {props.price}</h3>
        <p><em>{props.type} - {props.brewer}</em></p>
        <p><em>{props.type} - {props.brewer}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  Name: PropTypes.string.isRequired,
  ABV: PropTypes.string.isRequired,
  Type: PropTypes.string,
  Price: PropTypes.string.isRequired,
  Brewer: PropTypes.string,
  PintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
  // onKegClick: 
};

export default Keg;