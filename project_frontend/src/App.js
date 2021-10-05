import './App.css';
import CusRegistration from "./components/CusRegistration";
import CusLogin from "./components/CusLogin";
import CusProfile from "./components/CusProfile";
import CusUpdate from "./components/CusUpdate";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Route path="/signup" exact component={CusRegistration}/>
      <Route path="/login" exact component={CusLogin}/>
      <Route path="/profile" exact component={CusProfile}/>
      <Route path="/update" exact component={CusUpdate}/>
    </Router>
  );
}

export default App;
