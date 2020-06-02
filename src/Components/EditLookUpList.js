import React from 'react';

const EditLookUpList = (props) => {
    return (
        <>
            <table className="table table-striped table table-hover">
                <tdead class="tdead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">data</th>
                        <th scope="col">personalDataID</th>
                        <th scope="col">personalDataDetail</th>
                        <th scope="col">personalDataParent </th>
                        {/* <td>regexCode</td>
          <td>regexCodeDescription</td> */}

                        <th scope="col" >Actions</th>
                    </tr>
                </tdead>
                <tbody>
                    {
                        props.tableData.lengtd > 0 ? (
                            props.tableData.map((tableItem) => (
                                <tr key={tableItem.id}>
                                    <td>{tableItem.id}</td>
                                    <td> {tableItem.data}</td>
                                    <td> {tableItem.personalDataID}</td>
                                    <td >{tableItem.personalDataDetail}</td>
                                    <td >{tableItem.personalDataParent} </td><td>{tableItem.dataName}</td>
                                    <td >{tableItem.dataType}</td>
                                    <td >{tableItem.categoryType}</td>
                                   
                                    
                                    <td>
                                        <button className="btn btn-primary ml-2" onClick={() => props.EditTableItemForm(tableItem)}>Edit</button>
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



export default EditLookUpList;

