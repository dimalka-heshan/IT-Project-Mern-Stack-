import React,{useState} from "react";
import axios from "axios";
//import FileBase64 from 'react-file-base64';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Snackbar from '@material-ui/core/Snackbar'

toast.configure()

export default function CusRegistration(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [add1, setAddress1] = useState("");
    const [add2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");
    const [pscode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [pwd1, setPassowrd1] = useState("");
    const [pwd2, setPassowrd2] = useState("");
    //const [imageUrl, setImageUrl] = useState("");
    let fullName = null; 


    const sendData = async (e) => {
        e.preventDefault();

        fullName = firstName.concat(" ", lastName);
        
        let newCustomer = {
            name: fullName,
            add1: add1,
            add2: add2,
            city: city,
            area: area,
            pscode: pscode,
            country: country,
            phone: phone,
            DOB: DOB,
            email: email,
            pwd: pwd1,
            //imageUrl: imageUrl 
        }

        if (pwd1 === pwd2) { 
        axios.post("http://localhost:8071/customer/signup",newCustomer)
        .then(()=>{
            //alert("Registration Success")
            toast.success('Registration Success',{position:toast.POSITION.TOP_CENTER});
            window.location = "/login"
        }).catch((err)=>{
            alert(err);
        })
        }else{
            //alert("Password dismatch")
            toast.warning('Password dismatch',{position:toast.POSITION.TOP_CENTER});
        }

        setFirstName("");
        setLastName("");
        setAddress1("");
        setAddress2("");
        setCity("");
        setArea("");
        setPostalCode("");
        setCountry("");
        setPhoneNumber("");
        setDOB("");
        setEmail("");
        setPassowrd1("");
        setPassowrd2("");
        //setImageUrl("");  
      
    }


    return(
        <div class="body">
          <div class="container">
            <div class="frame">
                <div class="nav">
                    <ul class="links">
                        <li class="signin-active"><a href="/login" class="btn">Create An Account.</a></li>
                    </ul>
                        </div>
                        <div ng-app ng-init="checked = false">

                            <form class="form-signin" action="" method="post" name="form" onSubmit={sendData}> 

                            <h1 class="label">Name </h1>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input class="form-styling" type="text" className="form-control form-control-user" placeholder="First Name" 
                                        onChange={(e) => setFirstName(e.target.value)} required/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input class="form-styling" type="text" className="form-control form-control-user" placeholder="Last Name"
                                        onChange={(e) => setLastName(e.target.value)} required/>
                                    </div>
                                </div>



                                <br/>
                                <h1 class="label">Email Address</h1>
                                <div className="form-group mb-3">
                                <input class="form-styling" type="email" className="form-control form-control-user" placeholder="Email Address"
                                onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                            
                                <div className="form-group row mb-3">
                                <div className="col-sm-6">
                                <h1 class="label" >Mobile</h1>
                                    <input class="form-styling" type="tel" className="form-control form-control-user" placeholder="Phone Number"
                                    onChange={(e) => setPhoneNumber(e.target.value)} pattern="[0-9]{10}" required/>
                                </div>
                                <div className="col-sm-6">
                                <h1 class="label" >Date Of Birth</h1>
                                    <input class="form-styling" type="date" className="form-control form-control-user" placeholder="Date Of Birth"
                                    onChange={(e) => setDOB(e.target.value)} required/>
                                </div>
                                </div>
                                <h1 class="label" >Address</h1>
                                <div className="form-group row mb-3">
                                <div className="col-sm-3">
                                    <input class="form-styling" type="text" className="form-control form-control-user" placeholder="Postal Code"
                                    onChange={(e) => setPostalCode(e.target.value)} required/>
                                </div>
                                <div className="col-sm-5">
                                    <input class="form-styling" type="text" className="form-control form-control-user" placeholder="Lane 1"
                                    onChange={(e) => setAddress1(e.target.value)} required/>
                                </div>

                                <div className="col-sm-4">
                                    <input class="form-styling" type="text" className="form-control form-control-user" placeholder="Lane 2"
                                    onChange={(e) => setAddress2(e.target.value)} required/>
                                </div>
                                </div>

                                <div className="form-group row mb-3">
                                <div className="col-sm-4">
                                    <input class="form-styling" type="text" className="form-control form-control-user" placeholder="City"
                                    onChange={(e) => setCity(e.target.value)} required/>
                                </div>


                                <div className="col-sm-4">
                                    <input class="form-styling" type="text" className="form-control form-control-user" placeholder="Province"
                                    onChange={(e) => setArea(e.target.value)} required/>
                                </div>


                                <div className="col-sm-4">
                                    <input class="form-styling" type="text" className="form-control form-control-user" placeholder="Country"
                                    onChange={(e) => setCountry(e.target.value)} required/>
                                </div>
                                </div>


                                <h1 class="label" >Password</h1>
                                <div className="form-group row mb-3">
                                <div className="col-sm-6">
                                    <input class="form-styling" type="password" className="form-control form-control-user" placeholder="Password"
                                    onChange={(e) => setPassowrd1(e.target.value)} required/>
                                </div>

                                <div className="col-sm-6">
                                    <input class="form-styling" type="password" className="form-control form-control-user" placeholder="Repeat Password"
                                    onChange={(e) => setPassowrd2(e.target.value)}/>
                                </div>
                                </div>
                                {/*<div>

                                <h1 class="label" >Profile Picture</h1>
                               

                                <FileBase64
                                    type="file"
                                    name="imageUrl"
                                    multiple={ false }
                                    onChange={({ base64 }) => this.setImageUrl({ imageUrl: base64 })}
                                />
                                </div>*/}
                                
                                
                                    
                                <br/>                   
                                <center><button className="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </button></center>
                                
                            </form>
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <center><label class="label">Already Registered?</label> </center>
                    <center><li class="signin-active"><a href="/login" class="btn">Sign In</a></li></center>
                        <div>
                </div>
            </div>
        </div>
        </div>                   




    )

}
