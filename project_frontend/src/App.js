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
