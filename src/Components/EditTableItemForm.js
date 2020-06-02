import React, { Component } from 'react'
import {Modal ,Button,ModalHeader,ModalBody,ModalFooter}from 'react-bootstrap';

import { size,centered}from 'react-bootstrap/ModalDialog';


class EditTableItemForm extends Component {
  render() {
    return (
      <Modal 

        size="lg"
        show={this.props.modalIsOpen}
        onHide={this.props.onHideModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Personal Data Table Edit
      </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.props.updatetableItem} className="col-sm-10" data-toggle="validator" role="form">
            <div class="form-group">
              <label for="inputdataName" className="text-black" class="control-label" > dataName</label>
              <input type="text" data-minlength="6" name="dataName" class="form-control" placeholder="Data Name" required value={this.props.item.dataName} onChange={(this.props.handleInputChange)} />
            </div>
            <div>
              <label className="text-black"> dataType</label>
              <input type="text" data-minlength="6" name="dataType" class="form-control" placeholder="Data Type" required value={this.props.item.dataType} onChange={this.props.handleInputChange} />
            </div>
            <div>
              <label className="text-black"> categoryType</label>
              <input type="text" name="categoryType" class="form-control" placeholder="Category Type" value={this.props.item.categoryType} onChange={this.props.handleInputChange} />
            </div>
            <div>
              <label className="text-black"> isPersonalData</label>
              <input type="text" name="isPersonalData" class="form-control" placeholder="Is Personal Data ? " value={this.props.item.isPersonalData} onChange={this.props.handleInputChange} />
            </div>
            <div>
              <label className="text-black"> regexCode</label>
              <input type="text" name="regexCode" class="form-control" placeholder="Regex Code" value={this.props.item.regexCode} onChange={this.props.handleInputChange} />
            </div>
            <div>
              <label className="text-black" for="validationServer01"> regexCodeDescription</label>
              <input type="text" name="regexCodeDescription" class="form-control" placeholder="Regex Code Description" value={this.props.item.regexCodeDescription} onChange={this.props.handleInputChange} />
            </div>
            <br />
            <button className="btn btn-success">Add item</button>
            {/*fromla buton tetikleme */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button 
          onClick={this.props.onHideModal}
          >Close
           </Button>
        </Modal.Footer>
      </Modal>


    )
  }
}

export default EditTableItemForm;