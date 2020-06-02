import React, { Component } from 'react'


class EditTableItemForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.updatetableItem} className="col-sm-10" data-toggle="validator" role="form">
        <div class="form-group">
          <label for="inputdata" className="text-black"class="control-label" > data</label>
          <input type="text" data-minlength="6" name="data" class="form-control" placeholder="Data Name" required value={this.props.item.data} onChange={(this.props.handleInputChange)} />
        </div>
        <div>
          <label className="text-black"> personalDataID</label>
          <input type="text" data-minlength="6" name="personalDataID" class="form-control" placeholder="personalDataID"required value={this.props.item.personalDataID} onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label className="text-black"> personalDataDetail</label>
          <input type="text" name="personalDataDetail" class="form-control" placeholder="Category Type" value={this.props.item.personalDataDetail} onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label className="text-black"> personalDataParent</label>
          <input type="text" name="personalDataParent" class="form-control" placeholder="Is Personal Data ? " value={this.props.item.personalDataParent} onChange={this.props.handleInputChange} />
        </div>
        <button className="btn btn-success">Add item</button>
        {/*fromla buton tetikleme */}
        </form>

                      
                      )
  }
}

export default EditLookUpForm;