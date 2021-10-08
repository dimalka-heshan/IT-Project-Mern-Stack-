import React, { Component } from "react";
import axios from 'axios';
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
export default class DisplayDiscount extends Component{
    constructor(props){
        super(props);

        this.state ={
            discount:[]
        };
    }

    componentDidMount(){
        this.displayDiscount();
    }

    displayDiscount(){
        axios.get("http://localhost:8071/discount/display").then(res =>{
            if(res.data.success){
                this.setState({
                    discount:res.data.existingdiscount
                });

                console.log(this.state.discount)

            }
    
        })
    }

    onDelete=(id)=>{
        if (window.confirm('Are you sure you wish to delete this item?')) {
        axios.delete(`http://localhost:8071/discount/delete/${id}`).then((res)=>{ 
                //alert("Delete successful");
                toast.warn('Delete successful',{position:toast.POSITION.TOP_CENTER});
                 this.displayDiscount();
        })
    }
    }

    filterData(discount,searchKey){
        const result = discount.filter((discount) =>
            discount.productName.toLowerCase().includes(searchKey)
        )
        this.setState({discount:result})
    }


    handleSearchArea = (e)=> {
       const searchKey = e.currentTarget.value;

       axios.get("http://localhost:8071/discount/display").then(res =>{
            if(res.data.success){
                   this.filterData(res.data.existingdiscount,searchKey)
                };
            }
        )

    }

    refreshPage(){
            window.location.reload();
    }
        

   
    render(){
        return(
                    <div className="pt-3">
                    <div className="card shadow mb-4 w-55">
                    <div className="card-header py-3">
                        <center><h4 className="m-0 font-weight-bold text-primary">
                        Added Discounts
                        </h4></center>
                            <div className="col-md-3 ms-auto">
                            <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            name="searchQuery"

                            onChange={this.handleSearchArea}>
                            </input>
                            </div>
                            <Button className="form-group" type="submit" style={{background: "#B4CFEC", width: 15+"%", align:"right"}} startIcon={<RefreshIcon/>}  onClick={this.refreshPage}> Refresh Table</Button>&nbsp;&nbsp;&nbsp;      
                        <Button className="form-group" type="submit"style={{background: "#B4CFEC", width: 20+"%", align:"right"}} startIcon={<InsertDriveFileIcon/>}  > Generate Delivery Report</Button>  
                        </div>
                        <table className="table table-hover" style={{marginTop:'40px', background: "#F0FFFF" }} >
                            <thead>
                                <tr bgcolor="#D5D6EA">
                                <th scope="col">No</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Percentage</th>
                                <th scope="col">Real Price</th>
                                <th scope="col">New Price</th>
                                <th scope="col">Starting Date</th>
                                <th scope="col">Ending Date</th>
                                <th scope="col">Actions</th> 
                                </tr>
                            </thead>  
                            <tbody>
                                {this.state.discount.map((discount,index)=>(
                                   <tr>
                                        <th scope = "row">{index +1}</th>
                                        
                                        <td> <a href={`/display/${discount._id}`} style ={{textDecoration:'none'}}>{discount.productName} </a></td>


                                        <td>{discount.percentage}</td>
                                        <td>{discount.realprice}</td>
                                        <td>{discount.newprice}</td>
                                        <td>{discount.startingdate}</td>
                                        <td>{discount.endingdate}</td>
                                        <td>

                                        <Button className ="form-group" type="submit"style={{background: "#C3FDB8", width: 10+"%", align:"center"}} startIcon={<EditSharpIcon/>} href={`/update/${discount._id}`}></Button>
                
                                        &nbsp;

                                        <Button className ="form-group" type="submit"style={{background: "#F75D59", width: 10+"%", align:"center"}} startIcon={<DeleteForeverSharpIcon/>} onClick={() =>this.onDelete(discount._id)}></Button>
                                        </td>
                                    </tr> 
                                    

                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }

}

