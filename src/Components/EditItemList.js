import React from 'react';

const EditItemList = (props) => {
 
  return (
    <>
    <table className="table table-striped table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">dataName</th>
          <th scope="col">dataType</th>
          <th scope="col">categoryType</th>
          {/* <th>isPersonalData </th> */}
          {/* <th>regexCode</th>
          <th>regexCodeDescription</th> */}

          <th scope="col" >Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.tableData.length > 0 ? (
            props.tableData.map((tableItem) => (
              <tr key={tableItem.id}>
                <td>{tableItem.id}</td>
                <td>{tableItem.dataName}</td>
                <td>{tableItem.dataType}</td>
                <td>{tableItem.categoryType}</td>
                {/* <td>{tableItem.isPersonalData}</td> */}
                {/* <td>{tableItem.regexCode}</td>
                <td>{tableItem.regexCodeDescription} </td> */}
                <td>
                  
                  <button className="btn btn-primary ml-2"onClick={() => props.EditTableItemForm(tableItem)}>Edit</button>
                  <button className="btn btn-danger ml-2" onClick={() => props.deletetableItem(tableItem.id)}>Delete</button>
              
                </td>
              </tr>
              
            )
            )
          ) : (null)
        }
      </tbody>
    </table>
    </>
);
}



export default EditItemList;
