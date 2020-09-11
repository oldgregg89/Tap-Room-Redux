import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.ABV} - {props.name} - {props.price}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propsTypes = {
  Name: PropTypes.string.isRequired,
  ABV: PropsTypes.string.isRequired,
  Type: PropsTypes.string,
  Price: PropsTypes.string.isRequired
  id: PropTypes.string,
  whenKegClicked: PropsTypes.func
};

export default Keg;