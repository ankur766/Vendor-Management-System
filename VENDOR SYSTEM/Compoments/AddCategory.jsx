import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function AddCategory() {
    const [ Bankname,setBankName]=useState('');
    const [ EmergencyContactNo,setemergencyContactNo]=useState('');
    const  navigate=useNavigate()
    

    const handelesubmit=(e)=>{
        
    const headers = {
        "Content-Type": "application/json",
      };
        e.preventDefault();

        axios.post('http://localhost:3001/createBank', {bankName:Bankname,
        emergencyContactNo:EmergencyContactNo
      
      }

          , { headers })
            .then(() => {
              console.log("data added succesfully")
              navigate('/dashboard/category')
      
            })

            .catch(err => console.log(err));
        }
    
  return (

    <div>
        <div>
            <h3>Add Bank</h3>
            <div className='d-flex justify-content-center align-items-center h-75 '>
        <div className='p-3 rounded w-25 border '>
          <h2>Add Bank</h2>

          <form>
            <div className='mb-3'>
              <label htmlFor='category'><strong>Bank Name</strong></label>
              <input type='text' name='text' value={Bankname} autoComplete='off' placeholder='BankName' className='form-control rounded-0' onChange={(e) =>setBankName(e.target.value) } />
            </div>
            <div className='mb-3'>
              <label htmlFor='category'><strong>EmergencyContactNo</strong></label>
              <input type='text' name='text' value={EmergencyContactNo} autoComplete='off' placeholder='BankName' className='form-control rounded-0' onChange={(e) =>setemergencyContactNo(e.target.value) } />
            </div>

        
            <button className=' btn btn-success w-100 rounded-0 md-2' onClick={handelesubmit}>Add Bank Name</button>

          </form>
        </div>
      </div>
        </div>


    </div>
  )
}
