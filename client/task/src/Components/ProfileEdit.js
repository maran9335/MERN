import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import '../Components/proedit.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
function ProfileEdit() {
  return (
    <div >
    <div className='container-fluid profile-edit'>
    
    <h4><FaArrowLeftLong className='m-4'/>ProfileEdit</h4>
    </div>
    <div className='container'>
        <div>
            <h3 className=''><b>Welcome</b></h3>
            <h4 className='text-xl'>ragul Bhai</h4>
        </div>

        <div className="container member mt-3">
     <div className="row">
      <h6>PROFILE</h6>
       <div className="col-10">
       <h2>EDIT PHOTO / INFO</h2>
       </div>      
       <div className="col-2">
       <MdOutlineArrowForwardIos className="arrow"/>
       
       </div>
       </div>
       </div>
       <div className="container member mt-3">
     <div className="row">
      <h6>VERIFY</h6>
       <div className="col-10">
       <h2>EMAIL ADDRESS</h2>
       </div>      
       <div className="col-2">
       <MdOutlineArrowForwardIos className="arrow"/>
       </div>
       </div>
       </div>
       <div className="container member mt-3">
     <div className="row">
      <h6>AADHAR CARD</h6>
       <div className="col-10">
       <h2>ADD COPY</h2>
       </div>      
       <div className="col-2">
       <MdOutlineArrowForwardIos className="arrow"/>
       
       </div>
       </div>
       </div>
    </div>
    
    </div>
  )
}

export default ProfileEdit