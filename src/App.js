// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import LoggedIn from "./components/LoggedIn";
// import LoginForm from "./components/LoginForm"; // Ensure correct import here
// import RegisterForm from "./components/RegisterForm";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";

// // A helper component to handle private routes
// const PrivateRoute = ({ children, isLoggedIn, redirectTo }) => {
//   return isLoggedIn ? children : <Navigate to={redirectTo} />;
// };

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-gray-100">
//         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//         <div className="flex-grow flex items-center justify-center p-6">
//           <Routes>
//             {/* Home Page */}
//             <Route
//               path="/"
//               element={
//                 <PrivateRoute isLoggedIn={isLoggedIn} redirectTo="/login">
//                   <Home />
//                 </PrivateRoute>
//               }
//             />

//             {/* Login Page */}
//             <Route
//               path="/login"
//               element={
//                 !isLoggedIn ? (
//                   <LoginForm setIsLoggedIn={setIsLoggedIn} />
//                 ) : (
//                   <Navigate to="/" />
//                 )
//               }
//             />

//             {/* Registration Page */}
//             <Route
//               path="/register"
//               element={
//                 !isLoggedIn ? (
//                   <RegisterForm setIsLoggedIn={setIsLoggedIn} />
//                 ) : (
//                   <Navigate to="/" />
//                 )
//               }
//             />

//             {/* LoggedIn Page (Dashboard) */}
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute isLoggedIn={isLoggedIn} redirectTo="/login">
//                   <LoggedIn setIsLoggedIn={setIsLoggedIn} />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      {/* <Footer></Footer> */}
    </Router>
    
  );
};

export default App;