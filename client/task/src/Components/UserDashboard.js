import { GoArrowLeft } from "react-icons/go";
import '../Components/Userdashboard.css';
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoQrCodeOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { MdOutlineArrowForwardIos } from "react-icons/md";

function UserDashboard() {
  return (
   <div>
<h2 className="p-3"><GoArrowLeft  className=" mb-2 m-2 "/>User Dashboard</h2>
<div className="container-fluid first p-4">
      <div className="row">
        <div className="col-4">       
        </div>      
        <div className="col-2 col-xs-2">
        <RiAdminLine className="adminicon" />
        <span className="line">|</span>
        </div>
        <div className="col-2 col-xs-2">
        <MdOutlineMenuBook className="bookicon" />
        <span className="line">|</span>
        </div>
        <div className="col-2 col-xs-2">
        <IoQrCodeOutline  className="bookicon"/>
        <span className="line">|</span>

        </div>
        <div className="col-2 col-xs-2">
        <IoMdSettings className="bookicon"/>
        <span className="line">|</span>
        </div>
        <div>
        </div>
      </div>
      
  </div>
  <div className="container-fluid  ">
     
      <div className="row">
       
        <div className="col-5">
        <img src="data:image/jpeg;base64,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" alt="Description of the image" />
        </div>      
        <div className="col-7">
        <h1>ragul Bhai</h1>
        <p>UID:24uaa00004 <FaMapMarkerAlt />Coimbatore</p>
        
        </div>
        
        <div>
        </div>
      </div>
  </div>

  <div className="container">
     <div className=" pt-3 pl-2">
    <Card style={{ width: '40rem' }} className="cardss">
      <Card.Body>
        <Card.Title>Bulletin Board</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">The Future -Pingle</Card.Subtitle>
        <Card.Text>
         Direction is matter more than speed.Pingle is the correct.
        </Card.Text>
        <h5 className="readmore">Readmore</h5>
        </Card.Body>
        </Card>
    
     </div>
  </div>
  {/* suppoer lines */}
<div className="container mt-4">
<div className="row">
    <div className="col-5">
    <Card style={{ width: '13rem',height:'10rem'} } className='support'>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2">Support</Card.Subtitle>
        <Card.Text className="mt-4">
         24/7 Access Call
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  
    <div className="col-5 pl-4">
    <Card style={{ width: '13rem',height:'10rem'} } className='support text-center text-white today'>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2 text-white">Today-14 May</Card.Subtitle>
        <Card.Text>
        0-Appoinment<br/>
        0-up comming
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </div>
  </div>
  <div className="container member mt-3">
     
      <div className="row">
       <h2>My Memberships</h2>
        <div className="col-10">
        <h6>Manage and make bookings using your memberships</h6>
        </div>      
        <div className="col-2">
        <MdOutlineArrowForwardIos className="arrow" />
        
        </div>
        </div>
        </div>
        <div className="container  mt-3 text-white text-center">
     
       <div className="row">
         
         <div className="col-3 lastbox">
           <h6>
            Loyality<br/>
            23004.64
            </h6>
         </div> 
         <div className="col-3 lastbox">
         <h6>
            Following<br/>2
           </h6>
         </div> 

         <div className="col-3 lastbox">
         <div>
          <h6>
            Transaction <br/>
            238
           </h6>
         </div>
        </div>
        </div>
        <div className="col-2">
       
        
        </div>
        </div>
  </div>


  );
}

export default UserDashboard;
