import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import DiscountPage from '../NT_Components/discount/DiscountPage'
import Adminpage from '../NT_Components/Admin/Adminpage'
export default class backend extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                    <Router>
                            <Route path="/discount" exact component={DiscountPage}/>
                            <Route path="/admin" exact component={Adminpage}/>
                    </Router>                 
            </div>
        )
    }
}
