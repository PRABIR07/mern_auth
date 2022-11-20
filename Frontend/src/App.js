
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

import Contact from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Faq from "./components/Faq";


function App() {
  return (
  <Router>

   <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="*" element={<div>Page 404 Not Found</div>}/>
   </Routes>

  </Router>
  );
}

export default App;
