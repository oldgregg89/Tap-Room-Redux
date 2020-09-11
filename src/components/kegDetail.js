import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.abv} - {keg.names} - {keg.price}</h3>
      <p><em>{keg.type}</em></p>
      <p><em>{keg.brewer}</em></p>
      <p><em>{keg.pintsLeft}</em></p>
      <Button style={{margin: 10}} variant="success" onClick={ props.onClickingEdit }>Edit Keg</Button>
      <Button variant="danger" onClick={() => onClickingDelete(keg.id) }>Delete Keg</Button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;
