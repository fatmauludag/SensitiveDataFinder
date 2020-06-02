
import React from 'react';
import EditItemList from '../Components/EditItemList';
import EditTableItemForm from '../Components/EditTableItemForm';
import { Spinner } from "react-bootstrap";
//import PacmanLoader from '@bit/davidhu2000.react-spinners.pacman-loader';

class personalDataView extends React.Component {

  constructor() {
    super();
    this.state = {
      id: 0,
      dataName: 1,
      dataType: '',
      categoryType: '',
      isPersonalData: false,
      regexCode: '',
      regexCodeDescription: '',
      tableItem: {},
      tableData: [],
      editing: false,
      loading: true, //spinner için
      modalIsOpen: false
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
    if (!this.state.dataType) return;
    const tableItem = {
      id: this.state.tableData.length + 1,
      dataType: this.state.dataType,
      categoryType: this.state.categoryType,
      dataName: this.state.dataName,
      isPersonalData: this.state.isPersonalData,
      regexCode: this.state.regexCode,
      regexCodeDescription: this.state.regexCodeDescription
    };

    this.setState({
      dataType: '',
      categoryType: '',
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
      dataType: tableItem.dataType,
      categoryType: tableItem.categoryType,
      tableItem: tableItem,
      modalIsOpen: true
    });
  }

  updatetableItem = (event) => {
    event.preventDefault();

    const tableItem = {
      id: this.state.id,
      dataType: this.state.dataType,
      categoryType: this.state.categoryType,
      dataName: this.state.dataName,
      isPersonalData: this.state.isPersonalData,
      regexCode: this.state.regexCode,
      regexCodeDescription: this.state.regexCodeDescription
    };

    fetch('https://localhost:44345/api/personalData/save', {
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
    fetch('https://localhost:44345/api/personalData/list', {
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

  onHideModal = () => {
    this.setState({ modalIsOpen: false });
  }
  render() {
    const { categoryType, dataType, tableData, editing, loading } = this.state;

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
                <EditItemList
                  tableData={tableData}
                  deletetableItem={this.deletetableItem}
                  boughttableItem={this.boughttableItem}
                  EditTableItemForm={this.EditTableItemForm}
                />
              </div>
              <br />
              <div>
                <EditTableItemForm
                  item={this.state.tableItem}
                  modalIsOpen={this.state.modalIsOpen}//çek
                  onHideModal={this.onHideModal}//sil
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

export default personalDataView;