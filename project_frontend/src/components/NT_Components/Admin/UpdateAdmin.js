import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

const UpdateProfile = ({
  upfname,
  uplname,
  upemail,
  upnic,
  upusername,
  uppassword,
  updescription,
  upimage,
  show,
  onHide

}) => {
  
  const [fname, setFname] = useState(upfname)
   const [lname, setLname] = useState(uplname)
   const [email, setEmail] = useState(upemail)
   const [username, setUsername] = useState(upusername)
   const [password, setPassword] = useState(uppassword)
   const [nic, setNic] = useState(upnic)
   const [description , setDescription] = useState(updescription)
   const [image , setImage] = useState(upimage)

    const updateAdminProfile = async (e) => {
      e.preventDefault()
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      };

      const updateObject = {
        fname:fname,
        lname :lname,
        email :email,
        nic : nic,
        username : username,
        password: password,
        description :description,
        image : image
      }

      await axios.put('http://localhost:8071/admin/update', updateObject, config)
      .then((res) => {
        alert(res.data.status)
        window.location = "/profile"
      })
      .catch((err) => {
        console.log(err)
        alert(err.message)
      })
    }

    return (
        <div>
           <Modal show={show} onHide={onHide} animation={true} size="lg"
        aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="text-color">Update My Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={updateAdminProfile}> 

            <label> First Name</label>
                 
                  <input type="text" className="form-control form-control-user" Value={fname}
                  onChange={(e) => setFname(e.target.value)}/>
            
            <label>Last Name</label>

                  <input type="text" className="form-control form-control-user" Value={lname}
                  onChange={(e) => setLname(e.target.value)}/>
            
            <label>Email</label>

                  <input type="email" required className="form-control" Value={email}
                  onChange={(e) => setEmail(e.target.value)}/>

            <label>User Name</label>

                  <input type="text" className="form-control form-control-user" Value={username}
                  onChange={(e) => setUsername(e.target.value)} />


            <label>NIC</label>

                  <input type="text" className="form-control form-control-user" Value={nic}
                  onChange={(e) => setNic(e.target.value)} />
           
            <label>Description</label>

                  <input type="text" className="form-control form-control-user" Value={description}
                  onChange={(e) => setDescription(e.target.value)}/>
                 <br/>
            <label>Image</label><br/>
          
                  <input type="file" value={image}
                  onChange={(e) => setImage(e.target.value)}/>
            <br/><br/>
              <button type="submit">update my details</button> 
            </form>
            </Modal.Body>
        </Modal>
        </div>
    );
};

export default UpdateProfile;