
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import LoginForm from './components/LoginForm/LoginForm';
// import RegisterForm from './components/RegisterForm/RegisterForm';

// const App = () => {
//     // Function to scroll to the About section
//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/register" element={<RegisterForm />} />
//       </Routes>
//       {/* <Footer></Footer> */}
//     </Router>
    
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import CandidateDashboard from "./pages/CandidateDashboard";
import HRDashboard from "./pages/HRDashboard";
import HRManagerDashboard from "./pages/HRManagerDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />
        <Route path="/hr-manager-dashboard" element={<HRManagerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
