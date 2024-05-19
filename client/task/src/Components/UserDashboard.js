import { GoArrowLeft } from "react-icons/go";
import '../Components/Userdashboard.css';
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoQrCodeOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

function UserDashboard() {
  
  return (
    <div>
      <h2 className="p-3">
        <GoArrowLeft className=" mb-2 m-2 " />
        User Dashboard
      </h2>
      <div className="container-fluid first p-4">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-2 col-xs-2">
            <RiAdminLine className="adminicon" />
            <span className="line">|</span>
          </div>
          <div className="col-2 col-xs-2">
            <MdOutlineMenuBook className="bookicon" />
            <span className="line">|</span>
          </div>
          <div className="col-2 col-xs-2">
            <IoQrCodeOutline className="bookicon" />
            <span className="line">|</span>
          </div>
          <div className="col-2 col-xs-2">
            <IoMdSettings className="bookicon" />
            <span className="line">|</span>
          </div>
          <div></div>
        </div>
      </div>
      <div className="container-fluid  ">
        <div className="row">
          <div className="col-5">
            <img
              src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-vector-business-man-icon-png-image_966609.jpg"
              alt="Description of the image"
            />
          </div>
          <div className="col-7">
            <h1>ragul Bhai</h1>
            <p>
              UID:24uaa00004 <FaMapMarkerAlt />
              Coimbatore
            </p>
          </div>

          <div></div>
        </div>
      </div>

      <div className="container">
        <div className=" pt-3 pl-2">
          <Card style={{ width: "40rem" }} className="cardss">
            <Card.Body>
              <Card.Title>Bulletin Board</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                The Future -Pingle
              </Card.Subtitle>
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
            <Card
              style={{ width: "13rem", height: "10rem" }}
              className="support"
            >
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle className="mb-2">Support</Card.Subtitle>
                <Card.Text className="mt-4">24/7 Access Call</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-5 pl-4">
            <Card
              style={{ width: "13rem", height: "10rem" }}
              className="support text-center text-white today"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-white">
                  Today-14 May
                </Card.Subtitle>
                <Card.Text>
                  0-Appoinment
                  <br />
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
              Loyality
              <br />
              23004.64
            </h6>
          </div>
          <div className="col-3 lastbox">
            <h6>
              Following
              <br />2
            </h6>
          </div>

          <div className="col-3 lastbox">
            <div>
              <h6>
                Transaction <br />
                238
              </h6>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default UserDashboard;
