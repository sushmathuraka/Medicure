import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MembershipOptions() {
  const [showModal, setShowModal] = useState(false);
  const [membershipType, setMembershipType] = useState('');
  const [isMembershipAdded, setIsMembershipAdded] = useState(false);

  
  const handleOpenModal = () => {
    setShowModal(true);
  };

  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  
  const handleAddMembership = (type) => {
    setMembershipType(type);
    setIsMembershipAdded(true);
    setShowModal(false);
  };

  return (
    <div>
      
      {!isMembershipAdded ? (
        <Button variant="primary" onClick={handleOpenModal}>
          Add Membership
        </Button>
      ) : (
        
        <div>
          <p>Membership Added: {membershipType}</p>
          <Button variant="primary" onClick={handleOpenModal}>
            Change Membership
          </Button>
        </div>
      )}

      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Membership Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select a membership plan to enjoy extra benefits:</p>
          <ul>
            <li>Silver Membership - ₹99/month</li>
            <li>Gold Membership - ₹199/month</li>
            <li>Platinum Membership - ₹299/month</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddMembership('Silver Membership')}>
            Add Silver Membership
          </Button>
          <Button variant="primary" onClick={() => handleAddMembership('Gold Membership')}>
            Add Gold Membership
          </Button>
          <Button variant="primary" onClick={() => handleAddMembership('Platinum Membership')}>
            Add Platinum Membership
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MembershipOptions;

