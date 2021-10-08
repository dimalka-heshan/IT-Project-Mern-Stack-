import './App.css';
import CusRegistration from "./components/DH_Components/CusRegistration";
import CusLogin from "./components/DH_Components/CusLogin";
import CusProfile from "./components/DH_Components/CusProfile";
import CusUpdate from "./components/DH_Components/CusUpdate";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from "./components/DH_Components/Header";

function App() {
  return (
  <>
    <Router>
      <Header/>
      <Route path="/signup" exact component={CusRegistration}/>
      <Route path="/login" exact component={CusLogin}/>
      <Route path="/profile" exact component={CusProfile}/>
      <Route path="/update" exact component={CusUpdate}/>
    </Router>
  
  </> 
  );
}

export default App;

/**import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AddAdmin from './components/NT_Components/Admin/AddAdmin';
import AdminLogin from './components/NT_Components/Admin/AdminLogin';
//import Header from "./components/Admin/Header";
//import AdminProfile from "./components/Admin/AdminProfile";
//import UpdateProfile from "./components/Admin/UpdateAdmin";
//import Navbar from './components/Navbar/Navbar';
import DiscountEdit from './components/NT_Components/discount/DiscountEdit'
import DiscountPage from './components/NT_Components/discount/DiscountPage'
//import AdminLogin from './components/Admin/AdminLogin';
import Adminpage from './components/NT_Components/Admin/Adminpage';
import backend from './components/Project_Layouts/backend';

function App() {
  return (
    <>

       <Router>
          <Route path="/" exact component={AdminLogin}/>
          <Route path="/backend" exact component={backend}/>
          <Route path="/discount" exact component={DiscountPage}/>
          <Route path="/update/:id" exact component={DiscountEdit}/>
          <Route path="/admin" exact component={ Adminpage}/>
          <Route path="/add" exact component={AddAdmin}/>
      </Router>

    </>
  );
}
export default App;**/
