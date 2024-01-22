import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import './CSS/Home.css'




import Main from './pointGraph/main';

export default function Home() {
  const [adminTotal, setAdminTotal] = useState(0)
  const [employeeTotal, setemployeeTotal] = useState(0)
  const [salaryTotal, setSalaryTotal] = useState(0)
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, [])

  const AdminRecords = () => {
    // axios.get('http://localhost:3000/auth/admin_records')
    // .then(result => {
    //   if(result.data.Status) {
    //     setAdmins(result.data.Result)
    //   } else {
    //      alert(result.data.Error)
    //   }
    // })
    setAdmins([
      {
        id: 1,
        email: "ankur@gmal.com"
      },
      {
        id: 2,
        email: "aman@gmal.com"
      }

    ])
  }
  const adminCount = () => {
    // axios.get('http://localhost:3000/auth/admin_count')
    // .then(result => {
    //   if(result.data.Status) {
    //     setAdminTotal(result.data.Result[0].admin)
    //   }
    // })
    setAdminTotal(20)
  }
  const employeeCount = () => {
    // axios.get('http://localhost:3000/auth/employee_count')
    // .then(result => {
    //   if(result.data.Status) {
    //     setemployeeTotal(result.data.Result[0].employee)
    //   }
    // })
    setemployeeTotal(30)

  }
  const salaryCount = () => {
    // axios.get('http://localhost:3000/auth/salary_count')
    // .then(result => {
    //   if(result.data.Status) {
    //     setSalaryTotal(result.data.Result[0].salaryOFEmp)
    //   } else {
    //     alert(result.data.Error)
    //   }
    // })
    setSalaryTotal(5)
  }
  return (
    <>

      <div>
       
        <div className='p-3 d-flex justify-content-around mt-3'>
          <div className='px-3 pt-2 pb-3 border shadow-sm w-25 adminbox'>
            <div className='text-center pb-1'>
              <h4>Admin</h4>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
              <h5>Total:</h5>
              <h5>{adminTotal}</h5>
            </div>
          </div>
          <div className='px-3 pt-2 pb-3 border shadow-sm w-25 vendorbox'>
            <div className='text-center pb-1'>
              <h4>Vender</h4>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
              <h5>Total:</h5>
              <h5>{employeeTotal}</h5>
            </div>
          </div>
          <div className='px-3 pt-2 pb-3 border shadow-sm w-25 accountbox'>
            <div className='text-center pb-1'>
              <h4>Account</h4>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
              <h5>Total:</h5>
              <h5>${salaryTotal}</h5>
            </div>
          </div>
        </div>
        <div className='d-flex '>
        <Main/>
        </div>
       
       



        </div>
      

    </>
  )
}
