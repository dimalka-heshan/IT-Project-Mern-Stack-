import React,{useState} from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddAdmin(){

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [username, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  function sendData(e){
    e.preventDefault();

    const newadmin = {
      fname,
      lname,
      email,
      nic,
      username,
      password,
      description,
      image
    }
    if(password === cpassword){
    axios.post("http://localhost:8071/admin/add",newadmin).then(()=>{
      toast.warn('Admin Register Succesfull',{position:toast.POSITION.TOP_CENTER});
      window.setTimeout(function() {
        window.location.href = '/admin';
      }, 3100);
    }).catch((err)=>{
      toast.warn('Admin Account Already Exsist Check Email or Username again',{position:toast.POSITION.TOP_CENTER});
    })}else{
      toast.warn('Password Mismatch',{position:toast.POSITION.TOP_CENTER});
    }
  }

    return(
      <center>
      <div>
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" id="fname" placeholder="Enter First Name"
          onChange={(e)=>{
            setFname(e.target.value);
          }}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lname" placeholder="Enter Last Name"
          onChange={(e)=>{
            setLname(e.target.value);
          }}/>
        </div>
        <div className="mb-3 ml-5">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
          Required="required"
          pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}" 
          inputMode="email" placeholder="Enter Your Email"
          onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
        </div>
        <div className="mb-3">
          <label className="form-label">NIC</label>
          <input type="text" className="form-control" id="nic" placeholder="Enter NIC number"
          pattern ="[0-9]{12}||[0-9]{9}[v||V]"
          onChange={(e)=>{
            setNic(e.target.value);
          }}/>
        </div>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input type="text" className="form-control" id="username" placeholder="Enter User Name"
          onChange={(e)=>{
            setUname(e.target.value);
          }}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter Password" 
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
          onChange={(e)=>{
            setPassword(e.target.value);
          }}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" placeholder="Re-Eneter password" 
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
          onChange={(e)=>{
            setCpassword(e.target.value);
          }}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Discription</label>
          <textarea className="form-control" id="description" placeholder="Enter Your Description" maxLength="2000"
          onChange={(e)=>{
            setDescription(e.target.value);
          }}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input type="file" className="form-control" id="propic" placeholder="Enter your Clear Picture"
          onChange={(e)=>{
            setImage(e.target.value);
          }}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
      </center>
      
    )

}

export default AddAdmin;