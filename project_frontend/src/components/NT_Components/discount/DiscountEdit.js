import React, { Component } from "react";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class DiscountEdit extends Component{ 
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
        const id = this.props.match.params.id;

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


        axios.put(`http://localhost:8071/discount/update/${id}`,data).then((res)=>{
            if(res.data.success){
                //alert("discount update successfully");
                toast.success('Discount Update Successfully',{position:toast.POSITION.TOP_CENTER});
                window.setTimeout(function() {
                    window.location.href = '/discount';
                  }, 2500);
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
    };

        componentDidMount(){
            const id = this.props.match.params.id;
    
            axios.get(`http://localhost:8071/discount/display/${id}`).then((res) => {
                if(res.data.success){
                    this.setState({
                        productName :res.data.discount.productName,
                        percentage : res.data.discount.percentage,
                        realprice : res.data.discount.realprice,
                        newprice : res.data.discount.newprice,
                        startingdate : res.data.discount.startingdate,
                        endingdate : res.data.discount.endingdate,
                    });
                    console.log(this.state.discount)
                }
            });

    

    }

    render(){
        return(
            <div className="pt-3" align="center" background color="red">
            <div className="card shadow mb-8 w-50">
              <div className="card-header py-3">
             <h1 className="m-0 font-weight-bold text-dark" id="randy">Update Delivery Details</h1><br/>
              </div>
              <div className="card-body">
              <div className = "col-md-8 mt-4 mx-auto">
             <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Product Name</label>
                        <input type="text" className="form-control" id="productName" onChange={this.handleInputChange} name="productName" value={this.state.productName}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Percentage</label>
                        <input type="text" className="form-control" id="percentage" onChange={this.handleInputChange} name="percentage" value={this.state.percentage}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Real Price</label>
                        <input type="text" className="form-control" id="realprice" onChange={this.handleInputChange} name="realprice" value={this.state.realprice}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>New Price</label>
                        <input type="text" className="form-control" id="newprice" onChange={this.handleInputChange} name="newprice" value={this.state.newprice}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Starting Date</label>
                        <input type="date" className="form-control" id="startingdate"onChange={this.handleInputChange} name="startingdate" value={this.state.startingdate}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Ending Date</label>
                        <input type="date" className="form-control" id="endingdate"onChange={this.handleInputChange} name="endingdate" value={this.state.endingdate}/>
                    </div>
                    <br/>

                    <div>
                    <Button className="form-group" type="submit"style={{background: "#F75D59", width: 100+"%"}} startIcon={< CheckCircleSharpIcon/>}  onClick={this.onSubmit}> 
                Update Discount</Button>   
                    </div>
                </form>    
                <br/>
            </div> 
            </div>
            </div></div>        
        )
    }

}