import React from 'react';
import EditLookUpList from '../Components/EditLookUpList';
import EditTableItemForm from '../Components/EditLookUpForm';
import { Spinner } from "react-bootstrap";

class LookUpView extends React.Component {

  constructor() {
    super();
    this.state = {
      id: 0,
      data: 1,
      data: '',
      personalDataID: '',
      personalDataDetail: '',
      personalDataParent:'',
      tableItem: {},
      tableData: [],
      editing: false,
      loading: true //spinner için
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }
  // done
  addtableItem = (event) => {

    event.preventDefault()
    if (!this.state.data) return;
    const tableItem = {
      id: this.state.tableData.length + 1,
      data: this.state.data,
      personalDataID: this.state.personalDataID,
      personalDataDetail: this.state.personalDataDetail,
      personalDataParent: this.state.personalDataParent
    
    };
     this.setState({
      data: '',
      personalDataID: '',
      tableItem: tableItem,
      tableData: [...this.state.tableData, tableItem]
    })

  }

  //done
  deletetableItem = (id) => {

    var txt;
    var r = window.confirm("Are you sure for delete?");
    if (r == true) {

      fetch('https://localhost:44345/api/personalData/delete',
        {
          //backend url
          method: 'Post', // for delete 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id })
        })
        .then(res => res.json())
        .then(
          (result) => {
            this.refreshTable();
            //this.setState({ tableData: result });
          });

    }
  }
  //backendi var UI yanlışlık var
  EditTableItemForm = (tableItem) => {
    this.setEditing(true);
    this.setState({
      data: tableItem.data,
      personalDataID: tableItem.personalDataID,
      tableItem: tableItem
    });
  }

  updatetableItem = (event) => {
    event.preventDefault();

    const tableItem = {
      id: this.state.id,
      data: this.state.data,
      personalDataID: this.state.personalDataID,
      personalDataDetail: this.state.dataName,
      personalDataParent: this.state.isPersonalData,
    };

    fetch('https://localhost:44345/api/LookUp/save', {
      //backend url
      method: 'Post', // for list 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tableItem)
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.refreshTable();
          //this.setState({ tableData: result });
        });
  }

  setEditing = (value) => {
    if (typeof value !== 'boolean') { throw " This value must either be true or false" }
    this.setState({
      editing: value
    })
  }

  componentDidMount() {
    this.refreshTable()
    // this my method
  }

  refreshTable = () => {
    //method function
    fetch('https://localhost:44345/api/LookUp/list', {
      //backend url
      method: 'Get', // for list 
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ tableData: result, loading: false });
        });
  };


  render() {
    const { personalDataID, data, tableData, editing, loading } = this.state;

    return (
      <>
        {
          loading ?
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
              </div>
            </div>
            :
            <div>
              <div>
                <EditLookUpList
                  tableData={tableData}
                  deletetableItem={this.deletetableItem}
                  boughttableItem={this.boughttableItem}
                  EditLookUpForm={this.EditLookUpForm}
                />
              </div>
              <br />
              <div>
                <EditLookUpForm
                  item={this.state.tableItem}
                  handleInputChange={this.handleInputChange}
                  updatetableItem={this.updatetableItem}
                />
              </div>
            </div>
        }
      </>
    );
  }
}

export default LookUpView;
