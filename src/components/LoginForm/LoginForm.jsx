
// import React, { useState } from "react";
// import "./LoginForm.css";
// import Card from "../Card/Card";

// const LoginForm = ({ setIsLoggedIn }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessages, setErrorMessages] = useState({});

//   const errors = {
//     username: "Invalid username",
//     password: "Invalid password",
//     noUsername: "Please enter your username",
//     noPassword: "Please enter your password",
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!username) {
//       setErrorMessages({ name: "noUsername", message: errors.noUsername });
//       return;
//     }

//     if (!password) {
//       setErrorMessages({ name: "noPassword", message: errors.noPassword });
//       return;
//     }

//     const currentUser = database.find((user) => user.username === username);

//     if (currentUser) {
//       if (currentUser.password !== password) {
//         setErrorMessages({ name: "password", message: errors.password });
//       } else {
//         setErrorMessages({});
//         setIsLoggedIn(true);
//       }
//     } else {
//       setErrorMessages({ name: "username", message: errors.username });
//     }
//   };

//   const renderErrorMsg = (name) =>
//     name === errorMessages.name && (
//       <p className="error_msg">{errorMessages.message}</p>
//     );

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Card>
//         <h1 className="title">Sign In</h1>
//         <p className="subtitle">Please log in using your username and password!</p>
//         <form onSubmit={handleSubmit}>
//           <div className="inputs_container">
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             {renderErrorMsg("username")}
//             {renderErrorMsg("noUsername")}
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {renderErrorMsg("password")}
//             {renderErrorMsg("noPassword")}
//           </div>
//           <input type="submit" value="Log In" className="login_button" />
//         </form>
//         <div className="link_container">
//           <a href="/register" className="small">New User? Register</a>
//         </div>
//         <div className="go-back">
//           <a href="/" className="small">Home</a>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState } from "react";
import "./LoginForm.css";
import Card from "../Card/Card";

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState(""); // Changed from username to email
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    email: "Invalid email", // Changed from username to email
    password: "Invalid password",
    noEmail: "Please enter your email", // Changed from noUsername to noEmail
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessages({ name: "noEmail", message: errors.noEmail }); // Changed from noUsername to noEmail
      return;
    }

    if (!password) {
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    const currentUser = database.find((user) => user.email === email); // Changed from username to email

    if (currentUser) {
      if (currentUser.password !== password) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      setErrorMessages({ name: "email", message: errors.email }); // Changed from username to email
    }
  };

  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <h1 className="title">Sign In</h1>
        <p className="subtitle">Please log in using your email and password!</p>
        <form onSubmit={handleSubmit}>
          <div className="inputs_container">
            <input
              type="email" // Changed type from text to email
              placeholder="Email" // Changed placeholder from Username to Email
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {renderErrorMsg("email")} {/* Changed from username to email */}
            {renderErrorMsg("noEmail")} {/* Changed from noUsername to noEmail */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {renderErrorMsg("password")}
            {renderErrorMsg("noPassword")}
          </div>
          <input type="submit" value="Log In" className="login_button" />
        </form>
        <div className="link_container">
          <a href="/register" className="small">New User? Register</a>
        </div>
        <div className="go-back">
          <a href="/" className="small">Home</a>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;