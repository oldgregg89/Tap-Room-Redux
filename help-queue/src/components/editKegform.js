import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm(props){
  const {keg} = props;
  function handleEditKegFormSubmission(event){
    event.preventDefault();
    props.onEditTicket({names: event.target.names.value, abv: event.target.abv.value, type: event.target.type.value, price: event.target.price.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;