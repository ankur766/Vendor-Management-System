import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import'./CSS/category.css'

export default function Category() {
  const   [BankName,setBankName]=useState([]);
  

  useEffect(()=>
  {
    axios.get('https://vendor-management-system-2.onrender.com/getAllBanks')

      .then(result=>{
        console.log(result)
        setBankName(result.data)

      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
    
  },[])


  const columns = [
    { field: 'id', headerName: 'ID', width: 100 , headerClassName: 'header-bold'},
    { field: 'nameofBank', headerName: 'Name of Bank', width: 200 ,headerClassName: 'header-bold'},
    { field: 'emergencyContactNo', headerName: 'Emergency Contact No', width: 200 ,headerClassName: 'header-bold'},
    { field: 'email', headerName: 'Email', width: 200 ,headerClassName: 'header-bold'},
  ];


  const rows = BankName.map(c => ({id:c.bankID,nameofBank:c. bankName,emergencyContactNo:c.emergencyContactNo}))
  
  return (
    <div className='px-5 mt-3'>
    <div className='d-flex justify-content-center '><h2>Bank Name</h2></div>
    <Link to="/dashboard/add_category " className='btn btn-success'>Add Bank</Link>
    <div className='mt-3'>
    {Array.isArray(BankName) && BankName.length > 0 ? (

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid className='custom-data-grid'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
     ) : (
      <tr>
        <td colSpan="2">No data available</td>
      </tr>
    )}

    </div>

    </div>
  )
}
