import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UpdateProfile from '../Admin/UpdateAdmin'

const Profile = () => {
   const [fname, setFname] = useState(null)
   const [lname, setLname] = useState(null)
   const [email, setEmail] = useState(null)
   const [username, setUsername] = useState(null)
   const [password, setPassword] = useState(null)
   const [nic, setNic] = useState(null)
   const [description , setDescription] = useState(null)
   const [image , setImage] = useState(null)
   const [show, setShow] = useState(false)



   useEffect(() => {
      const getUserData = async () => {
         try {
            const config = {
               headers: {
                  Authorization: localStorage.getItem("Authorization")
               },
            }
            await axios.get("http://localhost:8071/admin/profile", config)
              .then((res) => {
                setFname(res.data.admin1.fname)
                setLname(res.data.admin1.lname)
                setEmail(res.data.admin1.email)
                setUsername(res.data.admin1.username)
                setPassword(res.data.admin1.password)
                setNic(res.data.admin1.nic)
                setImage(res.data.admin1.image)
                setDescription(res.data.admin1.description)
                

              }).catch((error) => {
                console.log(error.message)
              })
         } catch (error) {
            console.log(error.message)
         }
      }
      getUserData()
   }, [])

   const updateAdminProfile = () => {
      setShow(true)

    }

    const deleteAdmin = async () => {
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      };
        await axios.delete('http://localhost:8071/admin/delete', config)
        .then((res) => {
          alert('Your Account has been deleted')
          localStorage.removeItem('Authorization')
          window.location="/"
        })
        .catch((err) => {
          console.log(err.message)
        })
     }

     const adminLogout = () => {
      localStorage.removeItem('Authorization')
      alert('logout successfull')
      window.location = "/"
    }


   return (
      <div>
         <div className="container">
            <div className="row pt-5">
               <div className="col-lg-10 col-sm-12">
                  <div style={{ paddingLeft: 90 }}>

                     <div className="row" style={{ paddingLeft: 15 }}>
                     <label>
                           <h5 variant="h5" className="text-color" >First Name: {fname}</h5>
                        </label>
                        <label>
                           <h5 variant="h5" className="text-color" >Last Name: {lname}</h5>
                        </label>
                        <label>
                           <h5 variant="h5" className="text-color" >Email: {email}</h5>
                        </label>
                        <label>
                           <h5 variant="h5" className="text-color" >User Name: {username}</h5>
                        </label>
                        <label>
                           <h5 variant="h5" className="text-color" >NIC: {nic}</h5>
                        </label>
                        <label>
                           <h5 variant="h5" className="text-color" >Description: {description}</h5>
                        </label>
                     </div>
                     <div className="row" style={{ paddingLeft: 15 }}>
                     </div>
                     <div><button onClick={updateAdminProfile}>Update</button> <button onClick={deleteAdmin}>Delete</button></div>
                  </div>

                  <button onClick={adminLogout}>log out</button>
               </div>
            </div>
         </div>
         <UpdateProfile
          upfname ={fname}
          uplname ={lname}
          upemail ={email}
          upnic = {nic}
          upusername = {username}
          uppassword= {password}
          updescription ={description}
          upimage = {image}
          show={show}
          onHide={() => setShow(false)}
        />
      </div>
   )
}

export default Profile