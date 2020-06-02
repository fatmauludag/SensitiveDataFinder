
import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { Grid, Paper, FormRow, FormLabel, Input } from '@material-ui/core';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data: {},
      dataName:'',
      dataType:'',
      categoryType:'',
      isPersonalData:'',
      regexCode:'',
      regexCodeDescription:'',
      //generel computer info  can remane
      loading: true
    };
  }

  componentDidMount() {
    this.yuppi()
    // this my method
  }

  yuppi = () => {
    //method function
    fetch('https://localhost:44345/api/values', {
      //backend url
      method: 'Get', // for list 
      headers: { 'Content-Type': 'application/json' }, 
      body:
      {
        "dataName": this.state.dataName,
        "dataType": this.state.dataType,
        "categoryType": this.state.categoryType,
        "isPersonalData": this.state.isPersonalData,
        "regexCode": this.state.regexCode,
        "regexCodeDescription": this.state.regexCodeDescription
      }
    });
  };

  render() {
    return (
      <>

        <div>
          <label>{this.state.data.regexCodeDescription}</label>
          <div className="container">
            <label>Enter dataname</label>
            <input />
          </div>

          <div className="container">
            <label>Enter your dataType</label>
            <input />
          </div>

          <div className="container">
            <label>Enter your categoryType</label>
            <input />
          </div>
          <div className="container">
            <label className="text-white">Enter your PersonalDataType</label>
            <input />
          </div>
          <div className="container">
            <label>Enter your RegexCode</label>
            <input />
          </div>
          <div className="container">
            <label>Enter your RegexCodeDescription</label>
            <input />
          </div>
          <div className="container">
            <button onClick={this.yuppi} style={{ width: 500 }}>Send data!</button>
            <button style={{ width: 500 }}>Get data!</button>
          </div>
        </div>
      </>
    )
  }
}
export default App;