
import React from 'react';
import { Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function tokenExpiredModalView(props) {
  return (
    <Modal className="error-modal" open={props.tokenExpired}>
      <Modal.Content className="error-modal-content">
        <div className="error-modal-title">
          Your token has expired please login again
        </div>
        <Link to="/login" className="ui button">
          Okay
        </Link>
      </Modal.Content>
    </Modal>
  );
}
