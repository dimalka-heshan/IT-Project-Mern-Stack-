import React, { Component } from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

export default class AddDiscount extends Component{
    constructor(props){
        super(props);

        this.state ={
            productName : "",
            percentage : "",
            realprice : "",
            newprice : "",
            startingdate : "",
            endingdate : ""
        };
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit =(e) =>{
        e.preventDefault();

        const {productName, percentage, realprice , newprice , startingdate , endingdate} = this.state;

        const data = {
            productName : productName,
            percentage : percentage,
            realprice : realprice,
            newprice : newprice,
            startingdate : startingdate,
            endingdate : endingdate
        }
        console.log(data);


        axios.post("http://localhost:8071/discount/add",data).then((res)=>{
            if(res.data.success){
                toast.success('discount added successfully',{position:toast.POSITION.TOP_CENTER});
                this.setState({
                    productName : "",
                    percentage : "",
                    realprice : "",
                    newprice : "",
                    startingdate : "",
                    endingdate : "",
                })
            }
        })
    }

    render(){
        return(
            <div className="pt-3" align="center" background color="red">
 
            <div className="card shadow mb-50 w-50">
              <div className="card-header py-3">
              <center><h4 className="m-0 font-weight-bold text-primary">
                        Add Discounts
                        </h4></center>
              </div>
              <div className="card-body">
            <div className = "col-md-8 mt-4 mx-auto">
            <form >
        
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="productName" onChange={this.handleInputChange} name="productName" value={this.state.productName}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Percentage</label>
                        <input type="text" className="form-control" id="percentage" onChange={this.handleInputChange} name="percentage" value={this.state.percentage}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Real Price</label>
                        <input type="text" className="form-control" id="realprice" onChange={this.handleInputChange} name="realprice" value={this.state.realprice}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">New Price</label>
                        <input type="text" className="form-control" id="newprice" onChange={this.handleInputChange} name="newprice" value={this.state.newprice}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Starting Date</label>
                        <input type="date" className="form-control" id="startingdate"onChange={this.handleInputChange} name="startingdate" value={this.state.startingdate}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Ending Date</label>
                        <input type="date" className="form-control" id="endingdate"onChange={this.handleInputChange} name="endingdate" value={this.state.endingdate}/>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </form>
        </div>
        </div>
        </div>
        </div>

        )
    }

}
